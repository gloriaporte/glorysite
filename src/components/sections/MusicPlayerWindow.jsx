import { useEffect, useId, useRef, useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { musicConfig } from '../../config/music'
import { NextIcon, PauseIcon, PlayIcon, PrevIcon } from '../windows/DiscmanIcons'

const YT_API_SRC = 'https://www.youtube.com/iframe_api'

function loadYouTubeApi() {
  if (window.YT?.Player) {
    return Promise.resolve(window.YT)
  }

  return new Promise((resolve) => {
    const previous = window.onYouTubeIframeAPIReady
    window.onYouTubeIframeAPIReady = () => {
      previous?.()
      resolve(window.YT)
    }

    if (!document.querySelector(`script[src="${YT_API_SRC}"]`)) {
      const script = document.createElement('script')
      script.src = YT_API_SRC
      script.async = true
      document.body.appendChild(script)
    }
  })
}

function readTrackTitle(player) {
  const data = player?.getVideoData?.()
  return data?.title?.trim() || ''
}

function MusicPlayerWindow() {
  const { t } = useLanguage()
  const playerHostId = useId().replace(/:/g, '')
  const playerRef = useRef(null)
  const [ready, setReady] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [trackTitle, setTrackTitle] = useState('')
  const playlistId = musicConfig.youtubePlaylistId
  const idleLabel = t.musicplayer?.loading ?? '...'
  const labels = t.musicplayer ?? {}

  useEffect(() => {
    let cancelled = false

    const syncTitle = (player) => {
      const title = readTrackTitle(player)
      if (title) setTrackTitle(title)
    }

    loadYouTubeApi().then((YT) => {
      if (cancelled) return

      playerRef.current = new YT.Player(playerHostId, {
        width: '100%',
        height: '100%',
        playerVars: {
          listType: 'playlist',
          list: playlistId,
          autoplay: 1,
          controls: 0,
          modestbranding: 1,
          rel: 0,
          playsinline: 1,
          iv_load_policy: 3,
          disablekb: 1,
        },
        events: {
          onReady: (event) => {
            setReady(true)
            event.target.playVideo()
            syncTitle(event.target)
          },
          onStateChange: (event) => {
            // -1 unstarted, 0 ended, 1 playing, 2 paused, 3 buffering, 5 cued
            if (event.data === 1) setPlaying(true)
            if (event.data === 2 || event.data === 0) setPlaying(false)
            if ([1, 2, 3, 5].includes(event.data)) {
              syncTitle(event.target)
            }
          },
        },
      })
    })

    return () => {
      cancelled = true
      playerRef.current?.destroy?.()
      playerRef.current = null
    }
  }, [playerHostId, playlistId])

  const togglePlayPause = () => {
    if (playing) {
      playerRef.current?.pauseVideo?.()
    } else {
      playerRef.current?.playVideo?.()
    }
  }

  const next = () => playerRef.current?.nextVideo?.()
  const previous = () => playerRef.current?.previousVideo?.()

  return (
    <>
      <div className="discman-widget__player" aria-hidden="true">
        <div id={playerHostId} />
      </div>

      <div className="discman-widget__screen" aria-live="polite">
        <p className="discman-widget__track">{trackTitle || idleLabel}</p>
      </div>

      <div className="discman-widget__controls">
        <button
          type="button"
          className="discman-widget__hotspot discman-widget__hotspot--prev"
          onClick={previous}
          onPointerDown={(event) => event.stopPropagation()}
          aria-label={labels.prev ?? 'Previous'}
          disabled={!ready}
        >
          <PrevIcon />
        </button>
        <button
          type="button"
          className="discman-widget__hotspot discman-widget__hotspot--playpause"
          onClick={togglePlayPause}
          onPointerDown={(event) => event.stopPropagation()}
          aria-label={
            playing ? (labels.pause ?? 'Pause') : (labels.play ?? 'Play')
          }
          disabled={!ready}
        >
          {playing ? <PauseIcon /> : <PlayIcon />}
        </button>
        <button
          type="button"
          className="discman-widget__hotspot discman-widget__hotspot--next"
          onClick={next}
          onPointerDown={(event) => event.stopPropagation()}
          aria-label={labels.next ?? 'Next'}
          disabled={!ready}
        >
          <NextIcon />
        </button>
      </div>
    </>
  )
}

export default MusicPlayerWindow

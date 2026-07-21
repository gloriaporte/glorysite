import { useCallback, useRef, useState } from 'react'

const BASE_Y = 48
const CASCADE = 20
const STICKY_WIDTH = 272
const DISCMAN_WIDTH = 352
const EDGE_MARGIN = 24
const TASKBAR_HEIGHT = 48
const REM = 16

function getStandardWindowSize() {
  const width = Math.min(
    window.innerWidth - EDGE_MARGIN * 2,
    Math.max(28 * REM, window.innerWidth - 40 * REM),
  )
  const height = Math.min(
    window.innerHeight - TASKBAR_HEIGHT - EDGE_MARGIN * 2,
    22 * REM,
  )

  return { width, height }
}

function getCenteredPosition(index = 0) {
  const { width, height } = getStandardWindowSize()
  const deskHeight = window.innerHeight - TASKBAR_HEIGHT

  return {
    x: Math.max(EDGE_MARGIN, (window.innerWidth - width) / 2) + index * CASCADE,
    y: Math.max(EDGE_MARGIN, (deskHeight - height) / 2) + index * CASCADE,
  }
}

function getDefaultPosition(id, index) {
  if (id === 'todolist') {
    return {
      x: Math.max(EDGE_MARGIN, window.innerWidth - STICKY_WIDTH - EDGE_MARGIN),
      y: BASE_Y,
    }
  }

  if (id === 'musicplayer') {
    return {
      x: Math.max(EDGE_MARGIN, window.innerWidth - DISCMAN_WIDTH - EDGE_MARGIN),
      y: Math.max(
        BASE_Y,
        window.innerHeight - TASKBAR_HEIGHT - 320 - EDGE_MARGIN,
      ),
    }
  }

  return getCenteredPosition(index)
}

function createInitialWindows() {
  const position = getDefaultPosition('todolist', 0)
  return [{ id: 'todolist', ...position, zIndex: 1 }]
}

export function useWindowManager() {
  const [windows, setWindows] = useState(createInitialWindows)
  const zCounter = useRef(1)

  const focusWindow = useCallback((id) => {
    zCounter.current += 1
    const nextZ = zCounter.current
    setWindows((prev) =>
      prev.map((window) =>
        window.id === id ? { ...window, zIndex: nextZ } : window,
      ),
    )
  }, [])

  const openWindow = useCallback((id) => {
    setWindows((prev) => {
      const existing = prev.find((window) => window.id === id)

      if (existing) {
        zCounter.current += 1
        return prev.map((window) =>
          window.id === id
            ? { ...window, zIndex: zCounter.current }
            : window,
        )
      }

      const index = prev.length
      zCounter.current += 1
      const position = getDefaultPosition(id, index)

      return [
        ...prev,
        {
          id,
          ...position,
          zIndex: zCounter.current,
        },
      ]
    })
  }, [])

  const closeWindow = useCallback((id) => {
    setWindows((prev) => prev.filter((window) => window.id !== id))
  }, [])

  const moveWindow = useCallback((id, x, y) => {
    setWindows((prev) =>
      prev.map((window) =>
        window.id === id ? { ...window, x, y } : window,
      ),
    )
  }, [])

  return {
    windows,
    openWindow,
    closeWindow,
    moveWindow,
    focusWindow,
  }
}

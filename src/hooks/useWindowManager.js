import { useCallback, useRef, useState } from 'react'

const BASE_X = 72
const BASE_Y = 48
const CASCADE = 28
const STICKY_WIDTH = 272
const DISCMAN_WIDTH = 352
const EDGE_MARGIN = 24
const TASKBAR_HEIGHT = 48

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

  return {
    x: BASE_X + index * CASCADE,
    y: BASE_Y + index * CASCADE,
  }
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

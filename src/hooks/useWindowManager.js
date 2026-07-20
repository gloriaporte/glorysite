import { useCallback, useRef, useState } from 'react'

const BASE_X = 72
const BASE_Y = 48
const CASCADE = 28

export function useWindowManager() {
  const [windows, setWindows] = useState([])
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

      return [
        ...prev,
        {
          id,
          x: BASE_X + index * CASCADE,
          y: BASE_Y + index * CASCADE,
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

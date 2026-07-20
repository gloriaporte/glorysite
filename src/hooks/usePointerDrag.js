import { useCallback, useRef } from 'react'

export function usePointerDrag(onDrag, { onDragEnd } = {}) {
  const dragState = useRef(null)

  const handlePointerDown = useCallback(
    (event) => {
      if (event.button !== 0) return

      event.preventDefault()
      event.currentTarget.setPointerCapture(event.pointerId)

      dragState.current = {
        pointerId: event.pointerId,
        startX: event.clientX,
        startY: event.clientY,
        originX: event.currentTarget.dataset.originX
          ? Number(event.currentTarget.dataset.originX)
          : 0,
        originY: event.currentTarget.dataset.originY
          ? Number(event.currentTarget.dataset.originY)
          : 0,
      }
    },
    [],
  )

  const handlePointerMove = useCallback(
    (event) => {
      if (!dragState.current || dragState.current.pointerId !== event.pointerId) {
        return
      }

      const { startX, startY, originX, originY } = dragState.current
      onDrag(originX + (event.clientX - startX), originY + (event.clientY - startY))
    },
    [onDrag],
  )

  const handlePointerUp = useCallback(
    (event) => {
      if (!dragState.current || dragState.current.pointerId !== event.pointerId) {
        return
      }

      dragState.current = null
      onDragEnd?.()
    },
    [onDragEnd],
  )

  return {
    dragHandleProps: {
      onPointerDown: handlePointerDown,
      onPointerMove: handlePointerMove,
      onPointerUp: handlePointerUp,
      onPointerCancel: handlePointerUp,
    },
  }
}

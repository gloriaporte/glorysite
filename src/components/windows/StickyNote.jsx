import { useCallback } from 'react'
import { usePointerDrag } from '../../hooks/usePointerDrag'

const TASKBAR_HEIGHT = 48
const MIN_VISIBLE = 48

function clampPosition(x, y) {
  const maxX = window.innerWidth - MIN_VISIBLE
  const maxY = window.innerHeight - TASKBAR_HEIGHT - MIN_VISIBLE

  return {
    x: Math.min(Math.max(x, -MIN_VISIBLE), maxX),
    y: Math.min(Math.max(y, 0), maxY),
  }
}

function StickyNote({
  title,
  x,
  y,
  zIndex,
  closeLabel,
  onClose,
  onFocus,
  onMove,
  children,
}) {
  const handleDrag = useCallback(
    (nextX, nextY) => {
      const clamped = clampPosition(nextX, nextY)
      onMove(clamped.x, clamped.y)
    },
    [onMove],
  )

  const { dragHandleProps } = usePointerDrag(handleDrag)

  return (
    <section
      className="sticky-note"
      style={{ left: x, top: y, zIndex }}
      onMouseDown={onFocus}
      role="dialog"
      aria-label={title}
    >
      <header
        className="sticky-note__header"
        data-origin-x={x}
        data-origin-y={y}
        {...dragHandleProps}
      >
        <span className="sticky-note__title">{title}</span>
        <button
          type="button"
          className="sticky-note__close"
          onClick={onClose}
          onPointerDown={(event) => event.stopPropagation()}
          aria-label={closeLabel}
        >
          ×
        </button>
      </header>
      <div className="sticky-note__body">{children}</div>
    </section>
  )
}

export default StickyNote

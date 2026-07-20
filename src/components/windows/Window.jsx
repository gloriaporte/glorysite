import { useCallback } from 'react'
import { usePointerDrag } from '../../hooks/usePointerDrag'
import WindowHeader from './WindowHeader'

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

function Window({
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
      className="window"
      style={{ left: x, top: y, zIndex }}
      onMouseDown={onFocus}
      role="dialog"
      aria-label={title}
    >
      <div className="window__frame">
        <WindowHeader
          title={title}
          closeLabel={closeLabel}
          onClose={onClose}
          originX={x}
          originY={y}
          dragHandleProps={dragHandleProps}
        />
        <div className="window__body">{children}</div>
      </div>
    </section>
  )
}

export default Window

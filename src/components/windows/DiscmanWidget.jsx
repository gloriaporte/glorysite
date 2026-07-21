import { useCallback } from 'react'
import { useTheme } from '../../context/ThemeContext'
import { getThemeIconUrl } from '../../assets/themes'
import { usePointerDrag } from '../../hooks/usePointerDrag'
import { PowerIcon } from './DiscmanIcons'

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

function DiscmanWidget({
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
  const { themeId } = useTheme()
  const discmanSrc = getThemeIconUrl(themeId, 'discman')

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
      className="discman-widget"
      style={{ left: x, top: y, zIndex }}
      onMouseDown={onFocus}
      role="dialog"
      aria-label={title}
    >
      <div
        className="discman-widget__shell"
        data-origin-x={x}
        data-origin-y={y}
        {...dragHandleProps}
      >
        {discmanSrc && (
          <img
            className="discman-widget__art"
            src={discmanSrc}
            alt=""
            draggable={false}
          />
        )}
        {children}

        <button
          type="button"
          className="discman-widget__hotspot discman-widget__hotspot--power"
          onClick={onClose}
          onPointerDown={(event) => event.stopPropagation()}
          aria-label={closeLabel}
        >
          <PowerIcon />
        </button>
      </div>
    </section>
  )
}

export default DiscmanWidget

function WindowHeader({ title, closeLabel, onClose, originX, originY, dragHandleProps }) {
  return (
    <header
      className="window-header"
      data-origin-x={originX}
      data-origin-y={originY}
      {...dragHandleProps}
    >
      <span className="window-header__title">{title}</span>
      <button
        type="button"
        className="window-header__close"
        onClick={onClose}
        onPointerDown={(event) => event.stopPropagation()}
        aria-label={closeLabel}
      >
        ×
      </button>
    </header>
  )
}

export default WindowHeader

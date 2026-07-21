function PrevIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path d="M11.5 3.2v9.6L5.2 8l6.3-4.8z" fill="currentColor" />
      <rect x="3.2" y="3.2" width="1.6" height="9.6" fill="currentColor" />
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path d="M4.5 2.8v10.4L13 8 4.5 2.8z" fill="currentColor" />
    </svg>
  )
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <rect x="3.5" y="3" width="3" height="10" fill="currentColor" />
      <rect x="9.5" y="3" width="3" height="10" fill="currentColor" />
    </svg>
  )
}

function NextIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path d="M4.5 3.2v9.6L10.8 8 4.5 3.2z" fill="currentColor" />
      <rect x="11.2" y="3.2" width="1.6" height="9.6" fill="currentColor" />
    </svg>
  )
}

function PowerIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path
        d="M8 2.2v5.2M5.1 4.2a4.8 4.8 0 1 0 5.8 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="square"
      />
    </svg>
  )
}

export { PrevIcon, PlayIcon, PauseIcon, NextIcon, PowerIcon }

import IconSvg from '../IconSvg'

function FlagUS({ className }) {
  return (
    <IconSvg className={className} viewBox="0 0 24 16">
      <rect width="24" height="16" rx="3" fill="var(--flag-us-red)" />
      <rect y="1.23" width="24" height="1.23" fill="#fff" />
      <rect y="3.69" width="24" height="1.23" fill="#fff" />
      <rect y="6.15" width="24" height="1.23" fill="#fff" />
      <rect y="8.62" width="24" height="1.23" fill="#fff" />
      <rect y="11.08" width="24" height="1.23" fill="#fff" />
      <rect y="13.54" width="24" height="1.23" fill="#fff" />
      <rect width="10" height="8.62" rx="2" fill="var(--flag-us-blue)" />
      <rect
        width="24"
        height="16"
        rx="3"
        fill="none"
        stroke="var(--flag-border)"
        strokeWidth="0.6"
        opacity="0.45"
      />
    </IconSvg>
  )
}

export default FlagUS

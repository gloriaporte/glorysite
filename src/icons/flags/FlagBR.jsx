import IconSvg from '../IconSvg'

function FlagBR({ className }) {
  return (
    <IconSvg className={className} viewBox="0 0 24 16">
      <rect width="24" height="16" rx="3" fill="var(--flag-br-green)" />
      <polygon points="12,2 21.5,8 12,14 2.5,8" fill="var(--flag-br-yellow)" />
      <circle cx="12" cy="8" r="3" fill="var(--flag-br-blue)" />
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

export default FlagBR

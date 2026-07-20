import { useEffect } from 'react'
import { useTypewriter } from '../../hooks/useTypewriter'

function TypewriterText({
  text,
  speed = 45,
  delay = 0,
  active = true,
  showCursor = true,
  onComplete,
  className,
  as: Tag = 'span',
}) {
  const { displayed, done } = useTypewriter(text, { speed, delay, active })

  useEffect(() => {
    if (done) onComplete?.()
  }, [done, onComplete])

  return (
    <Tag className={className}>
      {displayed}
      {showCursor && !done && (
        <span className="typewriter-cursor" aria-hidden="true">
          _
        </span>
      )}
    </Tag>
  )
}

export default TypewriterText

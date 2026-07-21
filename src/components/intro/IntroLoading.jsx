import { useEffect } from 'react'
import { useLanguage } from '../../context/LanguageContext'

const LOADING_DURATION_MS = 4000

function IntroLoading({ onComplete }) {
  const { t } = useLanguage()

  useEffect(() => {
    const timeoutId = setTimeout(onComplete, LOADING_DURATION_MS)
    return () => clearTimeout(timeoutId)
  }, [onComplete])

  return (
    <div
      className="intro-loading cursor-wait"
      role="status"
      aria-busy="true"
      aria-live="polite"
    >
      <p className="intro-loading__label">{t.intro.loading}</p>
      <div className="intro-loading__track">
        <div
          className="intro-loading__bar"
          style={{ animationDuration: `${LOADING_DURATION_MS}ms` }}
        />
      </div>
    </div>
  )
}

export default IntroLoading

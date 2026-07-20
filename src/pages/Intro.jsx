import { useEffect, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import IntroLanguageSwitcher from '../components/intro/IntroLanguageSwitcher'
import TypewriterText from '../components/intro/TypewriterText'

const FORMAL_PORTFOLIO_URL = 'https://gloriaguazziniporte.vercel.app'

function Intro({ onStart }) {
  const { language, setLanguage, t } = useLanguage()
  const [titleDone, setTitleDone] = useState(false)
  const [messageDone, setMessageDone] = useState(false)

  useEffect(() => {
    setTitleDone(false)
    setMessageDone(false)
  }, [language])

  return (
    <div className="intro">
      <IntroLanguageSwitcher
        language={language}
        onLanguageChange={setLanguage}
        labels={t.intro.languages}
      />

      <h1>
        <TypewriterText
          key={`title-${language}`}
          text={t.intro.title}
          speed={70}
          onComplete={() => setTitleDone(true)}
        />
      </h1>

      {titleDone && (
        <p>
          <TypewriterText
            key={`message-${language}`}
            text={t.intro.message}
            speed={35}
            delay={200}
            onComplete={() => setMessageDone(true)}
          />
        </p>
      )}

      {messageDone && (
        <div className="intro__actions">
          <button type="button" className="intro__accept" onClick={onStart}>
            {t.intro.accept}
          </button>
          <a
            className="intro__formal"
            href={FORMAL_PORTFOLIO_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.intro.formal}
          </a>
        </div>
      )}
    </div>
  )
}

export default Intro

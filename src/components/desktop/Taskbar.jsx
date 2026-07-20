import { useLanguage } from '../../context/LanguageContext'
import { useClock } from '../../hooks/useClock'
import LanguageSwitcher from './LanguageSwitcher'

function Taskbar() {
  const { language, t } = useLanguage()
  const time = useClock(language)

  return (
    <footer className="taskbar">
      {/* <button type="button" className="taskbar__start">
        {t.taskbar.start}
      </button> */}

      <div className="taskbar__spacer" />

      <LanguageSwitcher labels={t.intro.languages} />

      <time className="taskbar__clock" dateTime={new Date().toISOString()}>
        {time}
      </time>
    </footer>
  )
}

export default Taskbar

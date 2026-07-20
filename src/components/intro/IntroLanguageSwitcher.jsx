import FlagIcon from '../icons/FlagIcon'
import { FLAGS } from '../../icons/names'

function IntroLanguageSwitcher({ language, onLanguageChange, labels }) {
  return (
    <div className="intro__languages" role="group" aria-label={labels.group}>
      <button
        type="button"
        className={`intro__language${language === 'pt-BR' ? ' intro__language--active' : ''}`}
        onClick={() => onLanguageChange('pt-BR')}
        aria-label={labels.pt}
        aria-pressed={language === 'pt-BR'}
      >
        <FlagIcon name={FLAGS.BR} className="icon icon--flag intro__flag-icon" />
      </button>
      <button
        type="button"
        className={`intro__language${language === 'en-US' ? ' intro__language--active' : ''}`}
        onClick={() => onLanguageChange('en-US')}
        aria-label={labels.en}
        aria-pressed={language === 'en-US'}
      >
        <FlagIcon name={FLAGS.US} className="icon icon--flag intro__flag-icon" />
      </button>
    </div>
  )
}

export default IntroLanguageSwitcher

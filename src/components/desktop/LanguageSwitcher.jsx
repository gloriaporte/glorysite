import { useLanguage } from '../../context/LanguageContext'
import FlagIcon from '../icons/FlagIcon'
import { FLAGS } from '../../icons/names'

function LanguageSwitcher({ labels }) {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="language-switcher" role="group" aria-label={labels.group}>
      <button
        type="button"
        className={`language-switcher__btn${language === 'pt-BR' ? ' language-switcher__btn--active' : ''}`}
        onClick={() => setLanguage('pt-BR')}
        aria-label={labels.pt}
        aria-pressed={language === 'pt-BR'}
      >
        <FlagIcon name={FLAGS.BR} className="icon icon--flag language-switcher__icon" />
      </button>
      <button
        type="button"
        className={`language-switcher__btn${language === 'en-US' ? ' language-switcher__btn--active' : ''}`}
        onClick={() => setLanguage('en-US')}
        aria-label={labels.en}
        aria-pressed={language === 'en-US'}
      >
        <FlagIcon name={FLAGS.US} className="icon icon--flag language-switcher__icon" />
      </button>
    </div>
  )
}

export default LanguageSwitcher

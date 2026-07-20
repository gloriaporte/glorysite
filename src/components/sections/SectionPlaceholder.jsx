import { useLanguage } from '../../context/LanguageContext'

function SectionPlaceholder({ labelKey }) {
  const { t } = useLanguage()
  const label = labelKey.split('.').reduce((value, part) => value?.[part], t)

  return (
    <div className="window-section">
      <p>{label}</p>
    </div>
  )
}

export default SectionPlaceholder

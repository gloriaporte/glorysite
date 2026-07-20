import { useTheme } from '../../context/ThemeContext'
import { getThemeIconUrl } from '../../assets/themes'

function ThemeIcon({ name, className, alt = '' }) {
  const { themeId } = useTheme()
  const src = getThemeIconUrl(themeId, name)

  if (!src) return null

  return <img src={src} alt={alt} className={className} draggable={false} />
}

export default ThemeIcon

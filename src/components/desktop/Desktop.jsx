import { useTheme } from '../../context/ThemeContext'
import { getThemeWallpaper } from '../../assets/themes'
import DesktopIcons from './DesktopIcons'

function Desktop({ children }) {
  const { themeId } = useTheme()
  const wallpaper = getThemeWallpaper(themeId)

  return (
    <div
      className="desktop"
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
      <DesktopIcons />
      {children}
    </div>
  )
}

export default Desktop

import { useLanguage } from '../../context/LanguageContext'
import { useWindows } from '../../context/WindowContext'
import {
  desktopIcons,
  getDesktopIconLabel,
} from '../../config/desktopIcons'
import DesktopIcon from './DesktopIcon'

function DesktopIcons() {
  const { t } = useLanguage()
  const { openWindow } = useWindows()

  return (
    <div className="desktop__icons">
      {desktopIcons.map(({ id, icon, labelKey }) => (
        <DesktopIcon
          key={id}
          icon={icon}
          label={getDesktopIconLabel(t, labelKey)}
          onClick={() => openWindow(id)}
        />
      ))}
    </div>
  )
}

export default DesktopIcons

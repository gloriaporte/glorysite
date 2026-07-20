import { useLanguage } from '../../context/LanguageContext'
import { useWindows } from '../../context/WindowContext'
import { desktopIcons, getDesktopIconLabel } from '../../config/desktopIcons'
import { windowRegistry } from '../../config/windowRegistry'
import Window from './Window'

function WindowManager() {
  const { windows, closeWindow, moveWindow, focusWindow } = useWindows()
  const { t } = useLanguage()

  return (
    <div className="window-manager">
      {windows.map((win) => {
        const Content = windowRegistry[win.id]
        const iconConfig = desktopIcons.find((icon) => icon.id === win.id)
        const title = iconConfig
          ? getDesktopIconLabel(t, iconConfig.labelKey)
          : win.id

        if (!Content) return null

        return (
          <Window
            key={win.id}
            title={title}
            closeLabel={t.windows.close}
            x={win.x}
            y={win.y}
            zIndex={win.zIndex}
            onClose={() => closeWindow(win.id)}
            onFocus={() => focusWindow(win.id)}
            onMove={(x, y) => moveWindow(win.id, x, y)}
          >
            <Content />
          </Window>
        )
      })}
    </div>
  )
}

export default WindowManager

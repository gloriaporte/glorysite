import { useEffect } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { useWindows } from '../../context/WindowContext'
import { desktopIcons, getDesktopIconLabel } from '../../config/desktopIcons'
import { windowChrome, windowRegistry } from '../../config/windowRegistry'
import DiscmanWidget from './DiscmanWidget'
import StickyNote from './StickyNote'
import Window from './Window'

const OPEN_ON_START = ['todolist']

const chromeFrames = {
  window: Window,
  sticky: StickyNote,
  discman: DiscmanWidget,
}

function WindowManager() {
  const { windows, openWindow, closeWindow, moveWindow, focusWindow } =
    useWindows()
  const { t } = useLanguage()

  useEffect(() => {
    OPEN_ON_START.forEach((id) => openWindow(id))
  }, [openWindow])

  return (
    <div className="window-manager">
      {windows.map((win) => {
        const Content = windowRegistry[win.id]
        const iconConfig = desktopIcons.find((icon) => icon.id === win.id)
        const title = iconConfig
          ? getDesktopIconLabel(t, iconConfig.labelKey)
          : win.id
        const chrome = windowChrome[win.id] ?? 'window'
        const Frame = chromeFrames[chrome] ?? Window

        if (!Content) return null

        return (
          <Frame
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
          </Frame>
        )
      })}
    </div>
  )
}

export default WindowManager

import Desktop from '../components/desktop/Desktop'
import Taskbar from '../components/desktop/Taskbar'
import WindowManager from '../components/windows/WindowManager'
import { WindowProvider } from '../context/WindowContext'

function Portfolio() {
  return (
    <WindowProvider>
      <div className="portfolio">
        <Desktop />
        <WindowManager />
        <Taskbar />
      </div>
    </WindowProvider>
  )
}

export default Portfolio

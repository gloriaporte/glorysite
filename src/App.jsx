import { useCallback, useState } from 'react'
import TVFrame from './components/crt/TVFrame'
import CRTScreen from './components/crt/CRTScreen'
import IntroLoading from './components/intro/IntroLoading'
import Intro from './pages/Intro'
import Portfolio from './pages/Portfolio'
import {
  getInitialPhase,
  markExperienceStarted,
} from './config/experience'

function App() {
  const [phase, setPhase] = useState(getInitialPhase)

  const handleStart = useCallback(() => {
    markExperienceStarted()
    setPhase('loading')
  }, [])

  const handleLoadingComplete = useCallback(() => {
    setPhase('portfolio')
  }, [])

  return (
    <TVFrame>
      <CRTScreen>
        {phase === 'intro' && <Intro onStart={handleStart} />}
        {phase === 'loading' && (
          <IntroLoading onComplete={handleLoadingComplete} />
        )}
        {phase === 'portfolio' && <Portfolio />}
      </CRTScreen>
    </TVFrame>
  )
}

export default App

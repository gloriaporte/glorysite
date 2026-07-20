import { createContext, useContext } from 'react'
import { useWindowManager } from '../hooks/useWindowManager'

const WindowContext = createContext(null)

export function WindowProvider({ children }) {
  const manager = useWindowManager()

  return (
    <WindowContext.Provider value={manager}>{children}</WindowContext.Provider>
  )
}

export function useWindows() {
  const context = useContext(WindowContext)
  if (!context) {
    throw new Error('useWindows must be used within a WindowProvider')
  }
  return context
}

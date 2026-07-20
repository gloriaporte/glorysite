import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import {
  applyTheme,
  getStoredThemeId,
  themes,
  DEFAULT_THEME_ID,
} from '../config/themes'

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [themeId, setThemeId] = useState(() => applyTheme(getStoredThemeId()))

  const setTheme = useCallback((nextThemeId) => {
    setThemeId(applyTheme(nextThemeId))
  }, [])

  const theme = themes[themeId] ?? themes[DEFAULT_THEME_ID]

  const value = useMemo(
    () => ({ themeId, theme, setTheme }),
    [themeId, theme],
  )

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

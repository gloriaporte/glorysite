import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { translations } from '../i18n'

export const LANGUAGE_STORAGE_KEY = 'portfolio-language'
export const DEFAULT_LANGUAGE = 'pt-BR'

const LanguageContext = createContext(null)

function getStoredLanguage() {
  const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY)
  return stored && translations[stored] ? stored : DEFAULT_LANGUAGE
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(getStoredLanguage)

  const setLanguage = useCallback((nextLanguage) => {
    if (!translations[nextLanguage]) return
    localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage)
    setLanguageState(nextLanguage)
  }, [])

  const t = translations[language]

  const value = useMemo(
    () => ({ language, setLanguage, t }),
    [language, setLanguage, t],
  )

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

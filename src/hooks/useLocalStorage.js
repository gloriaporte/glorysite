import { useState } from 'react'

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const stored = window.localStorage.getItem(key)
    return stored ? JSON.parse(stored) : initialValue
  })

  const setStoredValue = (newValue) => {
    setValue(newValue)
    window.localStorage.setItem(key, JSON.stringify(newValue))
  }

  return [value, setStoredValue]
}

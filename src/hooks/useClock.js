import { useEffect, useState } from 'react'

export function useClock(locale = 'pt-BR') {
  const [time, setTime] = useState(() => formatTime(locale))

  useEffect(() => {
    setTime(formatTime(locale))
    const intervalId = setInterval(() => setTime(formatTime(locale)), 1000)
    return () => clearInterval(intervalId)
  }, [locale])

  return time
}

function formatTime(locale) {
  return new Intl.DateTimeFormat(locale, {
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date())
}

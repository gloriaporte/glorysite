import { useEffect, useState } from 'react'

export function useTypewriter(text, { speed = 45, delay = 0, active = true } = {}) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!active) {
      setDisplayed('')
      setDone(false)
      return
    }

    setDisplayed('')
    setDone(false)

    let index = 0
    let intervalId
    const delayId = setTimeout(() => {
      intervalId = setInterval(() => {
        index += 1
        setDisplayed(text.slice(0, index))

        if (index >= text.length) {
          clearInterval(intervalId)
          setDone(true)
        }
      }, speed)
    }, delay)

    return () => {
      clearTimeout(delayId)
      clearInterval(intervalId)
    }
  }, [text, speed, delay, active])

  return { displayed, done }
}

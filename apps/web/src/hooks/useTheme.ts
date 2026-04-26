'use client'

import { useState, useEffect } from 'react'

export function useTheme(): 'dark' | 'light' {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof document === 'undefined') return 'dark'
    return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  })

  useEffect(() => {
    const el = document.documentElement
    setTheme(el.classList.contains('dark') ? 'dark' : 'light')
    const obs = new MutationObserver(() =>
      setTheme(el.classList.contains('dark') ? 'dark' : 'light')
    )
    obs.observe(el, { attributes: true, attributeFilter: ['class'] })
    return () => obs.disconnect()
  }, [])

  return theme
}

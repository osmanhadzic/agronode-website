import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { translations, type Language, type TranslationContent } from './translations'

type I18nContextValue = {
  language: Language
  setLanguage: (next: Language) => void
  content: TranslationContent
}

const I18nContext = createContext<I18nContextValue | null>(null)

const STORAGE_KEY = 'agronode_lang'

const detectInitialLanguage = (): Language => {
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'en' || stored === 'it' || stored === 'de') return stored

  const browser = navigator.language.toLowerCase()
  if (browser.startsWith('it')) return 'it'
  if (browser.startsWith('de')) return 'de'
  return 'en'
}

type Props = {
  children: ReactNode
}

export function I18nProvider({ children }: Props) {
  const [language, setLanguageState] = useState<Language>('en')

  useEffect(() => {
    setLanguageState(detectInitialLanguage())
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
    window.localStorage.setItem(STORAGE_KEY, language)
  }, [language])

  useEffect(() => {
    const handleLanguageChange = (event: Event) => {
      const customEvent = event as CustomEvent<Language>
      if (customEvent.detail === 'en' || customEvent.detail === 'it' || customEvent.detail === 'de') {
        setLanguageState(customEvent.detail)
      }
    }

    const handleStorage = (event: StorageEvent) => {
      if (event.key !== STORAGE_KEY) return
      if (event.newValue === 'en' || event.newValue === 'it' || event.newValue === 'de') {
        setLanguageState(event.newValue)
      }
    }

    window.addEventListener('agronode:language-change', handleLanguageChange as EventListener)
    window.addEventListener('storage', handleStorage)

    return () => {
      window.removeEventListener('agronode:language-change', handleLanguageChange as EventListener)
      window.removeEventListener('storage', handleStorage)
    }
  }, [])

  const setLanguage = (next: Language) => {
    setLanguageState(next)
    window.dispatchEvent(new CustomEvent<Language>('agronode:language-change', { detail: next }))
  }

  const value = useMemo<I18nContextValue>(
    () => ({
      language,
      setLanguage,
      content: translations[language],
    }),
    [language],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export const useI18n = () => {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider')
  }
  return context
}

import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import HttpApi from 'i18next-http-backend'
import i18n from 'i18next'

// Get default language from HTML data attribute
const getDefaultLanguage = (): string => {
    const rootDiv = document.getElementById('root')
    if (rootDiv && rootDiv.dataset.defaultLanguage) {
        const defaultLang = rootDiv.dataset.defaultLanguage
        // Validate that it's one of the supported languages
        if (['en', 'fa', 'ru'].includes(defaultLang)) {
            return defaultLang
        }
    }
    return 'en' // fallback to English
}

// Check if user has a stored language preference
const getStoredLanguage = (): string | null => {
    return localStorage.getItem('i18nextLng')
}

// Determine initial language: use stored preference if exists, otherwise use server default
const getInitialLanguage = (): string => {
    const storedLang = getStoredLanguage()
    if (storedLang && ['en', 'fa', 'ru'].includes(storedLang)) {
        return storedLang
    }
    return getDefaultLanguage()
}

i18n.use(initReactI18next)
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
        lng: getInitialLanguage(), // Set initial language directly
        fallbackLng: getDefaultLanguage(),
        debug: process.env.NODE_ENV === 'development',
        defaultNS: ['main'],
        ns: ['main'],
        detection: {
            order: ['localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
            caches: ['localStorage']
        },
        load: 'languageOnly',
        preload: ['en', 'ru', 'fa'],
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json'
        },
        interpolation: {
            escapeValue: false
        },
        react: {
            useSuspense: true
        }
    })

export default i18n

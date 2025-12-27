import { navigationTranslations } from './translations/navigation'
import { heroTranslations } from './translations/hero'
import { commonTranslations } from './translations/common'
import { problemStatementTranslations } from './translations/problemStatement'
import { productPreviewTranslations } from './translations/productPreview'
import { proofSectionTranslations } from './translations/proofSection'
import { contactSectionTranslations } from './translations/contactSection'
import { footerTranslations } from './translations/footer'
import { createPlannerTranslations } from './translations/createPlanner'
import { formStepsTranslations } from './translations/formSteps'

export type Locale = 'en' | 'th'

export const locales = ['en', 'th'] as const
export const defaultLocale: Locale = 'en'

export const translations = {
  en: {
    ...navigationTranslations.en,
    ...heroTranslations.en,
    ...commonTranslations.en,
    ...problemStatementTranslations.en,
    ...productPreviewTranslations.en,
    ...proofSectionTranslations.en,
    ...contactSectionTranslations.en,
    ...footerTranslations.en,
    ...createPlannerTranslations.en,
    ...formStepsTranslations.en
  },
  th: {
    ...navigationTranslations.th,
    ...heroTranslations.th,
    ...commonTranslations.th,
    ...problemStatementTranslations.th,
    ...productPreviewTranslations.th,
    ...proofSectionTranslations.th,
    ...contactSectionTranslations.th,
    ...footerTranslations.th,
    ...createPlannerTranslations.th,
    ...formStepsTranslations.th
  }
} as const

export function getTranslations(locale: Locale) {
  return translations[locale]
}

export function getTranslation(locale: Locale, key: string): string {
  const keys = key.split('.')
  let value: unknown = translations[locale]

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = (value as Record<string, unknown>)[k]
    } else {
      return key
    }
  }

  return typeof value === 'string' ? value : key
}

export function hasLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}

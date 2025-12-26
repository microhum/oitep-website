"use client";

import { createContext, useContext, ReactNode } from 'react';
import { Locale, getTranslations } from '../translations';

interface LocaleContextType {
  locale: Locale;
  translations: ReturnType<typeof getTranslations>;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

interface LocaleProviderProps {
  locale: Locale;
  children: ReactNode;
}

export function LocaleProvider({ locale, children }: LocaleProviderProps) {
  const translations = getTranslations(locale);

  return (
    <LocaleContext.Provider value={{ locale, translations }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
}

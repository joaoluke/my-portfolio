import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './translations/en.json';
import ptBR from './translations/pt.json';
import es from './translations/es.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en
      },
      'pt-BR': {
        translation: ptBR
      },
      es: {
        translation: es
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

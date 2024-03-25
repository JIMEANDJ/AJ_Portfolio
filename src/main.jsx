import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { I18nextProvider } from "react-i18next"
import i18next from "i18next"
import globals_es from '../src/translations/ES/global.json'
import globals_en from '../src/translations/EN/global.json'

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    es: {
      global: globals_es
    },
    en: {
      global: globals_en
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
)

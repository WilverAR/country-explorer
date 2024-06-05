import { createI18n } from 'vue-i18n';
import es from '@/locales/es.js'
import en from '@/locales/en.js'

const i18n = createI18n({
    locale: 'es',
    legacy: false,
    messages: {
        es,
        en,
    }
})
export default i18n;
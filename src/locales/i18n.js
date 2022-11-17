import { createI18n } from 'vue-i18n'
import UzLocal from './uz.json'
import ClLocal from './cl.json'
import RuLocal from './ru.json'
import EnLocal from './en.json'

const messages = {
    uz: UzLocal,
    cl: ClLocal,
    ru: RuLocal,
    en: EnLocal,
}

const i18n = createI18n({
    locale: 'uz',
    fallbackLocale: 'uz',
    messages,
})

export default i18n
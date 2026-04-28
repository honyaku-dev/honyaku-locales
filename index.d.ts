export interface Locale {
  id: string
  name: string
  endonym: string
  bcp47: string | null
}

declare const locales: Locale[]

export default locales

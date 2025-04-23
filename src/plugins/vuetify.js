// Импорт стилей
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Импорт Vuetify
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Тема (опционально)
const myCustomTheme = {
  dark: false,
  colors: {
    primary: '#1867C0',
    secondary: '#5CBBF6',
  }
}

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'myCustomTheme',
    themes: {
      myCustomTheme,
    }
  },
  defaults: {
    VBtn: {
      color: 'primary',
      variant: 'flat',
    },
    VTextField: {
      color: 'primary',
      variant: 'outlined',
    }
  }
})
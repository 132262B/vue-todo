// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

export default createVuetify(
  {
    theme: {
      themes: {
        light: {
          dark: false,
          colors: {
            bg: '#5FCEB3',
            buttonColor: '#5197D6',
          }
        },
      },
    },
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      }
    },
  }
)

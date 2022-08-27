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
            mainBackgroundColor: '#f8f9fa',
            headerColor: '#ced4da'
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

import './assets/styles/main.css'

import 'virtual:svg-icons-register'

import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'

import '@fontsource/lato/400.css'
import '@fontsource/lato/700.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

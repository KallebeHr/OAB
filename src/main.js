/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Styles
import 'unfonts.css'

// Import VLibras
import VLibras from '@vue-a11y/vlibras'

const app = createApp(App)

// Registrar outros plugins (como Vuetify)
registerPlugins(app)

// Registrar VLibras
app.use(VLibras)

app.mount('#app')

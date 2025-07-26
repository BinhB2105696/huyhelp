// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// ✅ Import Bootstrap CSS (nên để sau cùng các import logic)
import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

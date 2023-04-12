import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'admin-lte/dist/css/adminlte.min.css'
import 'admin-lte/dist/js/adminlte.min.js'
import 'admin-lte/plugins/bootstrap/js/bootstrap.min.js'
import 'admin-lte/plugins/jquery/jquery.min.js'
import 'admin-lte/plugins/fontawesome-free/css/all.min.css'
import 'admin-lte/plugins/popper/popper.min.js'

const app = createApp(App)
app.use(router)
app.mount('#app')

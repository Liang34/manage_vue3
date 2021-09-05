import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
// 挂载api
import api from './api'
// import request from './utils/request'
import storage from './utils/storage'
const app = createApp(App)
app.config.globalProperties.$api = api
// app.config.globalProperties.$request = request
app.config.globalProperties.$storage = storage
app.use(ElementPlus)
app.use(store)
app.use(router)
app.mount('#app')

import { createApp } from 'vue'
import TDesign from 'tdesign-vue-next';
// 引入组件库全局样式资源
import 'tdesign-vue-next/es/style/index.css';
import './style.css'
import App from './App.vue'
import router from './router';
import store from './store';
const app = createApp(App)
app.use(router)
app.use(store).mount('#app')
app.use(TDesign)
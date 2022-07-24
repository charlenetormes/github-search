import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import 'tw-elements'

createApp(App).use(store).use(router).mount('#app');

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Home from './pages/Home.vue'
import Auth from './pages/AuthPage.vue'
import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
    {path: '/', component: Home},
    {path: '/register', component: Auth}
]
const router = createRouter({
    history: createMemoryHistory(),
    routes
})

createApp(App).use(router).mount('#app')

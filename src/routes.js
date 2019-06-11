
import Home from './pages/Home/Home.vue'
import About from './pages/About/About.vue'
import Holochain from './pages/Holochain/Holochain.vue'
import Whitepaper from './pages/Whitepaper/Whitepaper.vue'
import Connect from './pages/Connect/Connect.vue'

export const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/holochain', component: Holochain },
    { path: '/whitepaper', component: Whitepaper },
    { path: '/connect', component: Connect },

]
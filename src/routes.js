
import Home from './pages/Home/Home.vue'
import Vision from './pages/Vision/Vision.vue'
import Founder from './pages/Founder/Founder.vue'
import Holochain from './pages/Holochain/Holochain.vue'
import Connect from './pages/Connect/Connect.vue'
import Declaration from './pages/Declaration/Declaration.vue'
import WarOnSenseMaking from './pages/WarOnSenseMaking/WarOnSenseMaking.vue'
import TheProtocol from './pages/TheProtocol/TheProtocol.vue'

export const routes = [
    { path: '/', component: Home },
    { path: '/vision', component: Vision },
    { path: '/team/raymond-d-powell', component: Founder },
    { path: '/holochain', component: Holochain },
    { path: '/connect', component: Connect },
    { path: '/declaration', component: Declaration },
    { path: '/war-on-sense-making', component: WarOnSenseMaking },
    { path: '/the-protocol', component: TheProtocol },
]
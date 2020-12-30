
import Home from './pages/Home/Home.vue'
import About from './pages/About/About.vue'
import Vision from './pages/Vision/Vision.vue'
import Founder from './pages/Founder/Founder.vue'
import Holochain from './pages/Holochain/Holochain.vue'
import Connect from './pages/Connect/Connect.vue'
import Declaration from './pages/Declaration/Declaration.vue'
import WarOnSenseMaking from './pages/WarOnSenseMaking/WarOnSenseMaking.vue'
import TechSpecs from './pages/TechSpecs/TechSpecs.vue'
import ProtocolLove from './pages/Protocol.Love/Protocol.Love.vue'
import Services from './pages/Services/Services.vue'
import Ecosystem from './pages/Ecosystem/Ecosystem.vue'

export const routes = [
    { path: '/', component: Home },
    { path: '/vision', component: Vision },
    { path: '/about', component: About },
    { path: '/founder', component: Founder },
    { path: '/team/raymond-d-powell', component: Founder },
    { path: '/holochain', component: Holochain },
    { path: '/connect', component: Connect },
    { path: '/declaration', component: Declaration },
    { path: '/war-on-sense-making', component: WarOnSenseMaking },
    { path: '/specs', component: TechSpecs },
    { path: '/protocol.love', component: ProtocolLove },
    { path: '/services', component: Services },
    { path: '/ecosystem', component: Ecosystem },
    //{ path: '/in-action', component: InAction },
    //{ path: '/civic-engageement-platform', component: CEP }

]

<template>
    <div class="ecosystem">
        <!-- navigation -->
        <cogov-nav>
            <div slot="navIcon" class="nav__icon" @click="navOpen = true">
                <a class="removelink">
                    <img src="/src/assets/images/cogov__menu.png" alt="" class="nav__mobile">
                </a>
            </div>                    
        </cogov-nav>

        <!-- navigation -->
        <cogov-nav-open v-if="navOpen">
            <img @click="navOpen = false" slot="navClose" class="navOpen__nav--icon" src="/src/assets/images/cogov__menu.png">                        
        </cogov-nav-open>       

        <!-- header -->
        <cogov-ecosystem-header></cogov-ecosystem-header>

        <!-- content -->
        <cogov-ecosystem-content></cogov-ecosystem-content>
    
        <!-- footer -->
        <cogov-footer></cogov-footer>         
    </div>
</template>

<script>
    import cogovNav from '../../components/Nav/Nav.vue'
    import cogovNavOpen from '../../components/NavOpen/NavOpen.vue'
    import cogovEcosystemHeader from '../../components/Ecosystem/EcosystemHeader/EcosystemHeader.vue'
    import cogovEcosystemContent from '../../components/Ecosystem/EcosystemContent/EcosystemContent.vue'
    import cogovFooter from '../../components/Footer/Footer.vue'

    export default {
        data() {
            return {
                navOpen: false  
            }
        },         
        components: {
            cogovNav,
            cogovNavOpen,
            cogovEcosystemHeader,
            cogovEcosystemContent,
            cogovFooter
        }
    }
</script>

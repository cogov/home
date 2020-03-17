
<template>
    <div class="connect">
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
        <cogov-war-on-sense-making-header></cogov-war-on-sense-making-header>

        <!-- content -->
        <cogov-war-on-sense-making-content></cogov-war-on-sense-making-content>
    
        <!-- footer -->
        <cogov-footer></cogov-footer>         
    </div>
</template>

<script>
    import cogovNav from '../../components/Nav/Nav.vue'
    import cogovNavOpen from '../../components/NavOpen/NavOpen.vue'
    import cogovWarOnSenseMakingHeader from '../../components/WarOnSenseMaking/WarOnSenseMakingHeader/WarOnSenseMakingHeader.vue'
    import cogovWarOnSenseMakingContent from '../../components/WarOnSenseMaking/WarOnSenseMakingContent/WarOnSenseMakingContent.vue'
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
            cogovWarOnSenseMakingHeader,
            cogovWarOnSenseMakingContent,
            cogovFooter
        }
    }
</script>

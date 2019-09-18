
<template>
    <div class="services">
        <!-- navigation -->
        <cogov-nav>
            <div slot="navIcon" class="nav__icon" @click="navOpen = true">
                <a class="removelink">
                    <img src="../../assets/images/cogov__menu.png" alt="" class="nav__mobile">
                </a>
            </div>                    
        </cogov-nav>

        <!-- navigation -->
        <cogov-nav-open v-if="navOpen">
            <img @click="navOpen = false" slot="navClose" class="navOpen__nav--icon" src="../../assets/images/cogov__menu.png">                        
        </cogov-nav-open>       

        <!-- header -->
        <cogov-services-header></cogov-services-header>

        <!-- content -->
        <cogov-services-content></cogov-services-content>
    
        <!-- footer -->
        <cogov-footer></cogov-footer>         
    </div>
</template>

<script>
    import cogovNav from '../../components/Nav/Nav.vue'
    import cogovNavOpen from '../../components/NavOpen/NavOpen.vue'
    import cogovServicesHeader from '../../components/Services/ServicesHeader/ServicesHeader.vue'
    import cogovServicesContent from '../../components/Services/ServicesContent/ServicesContent.vue'
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
            cogovServicesHeader,
            cogovServicesContent,
            cogovFooter
        }
    }
</script>


<template>
    <div class="home">
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

        <!-- home header -->
        <cogov-home-header></cogov-home-header>

        <!-- home about -->
        <cogov-home-about></cogov-home-about>

        <!-- home details -->
        <cogov-home-details></cogov-home-details>        

        <!-- home collaborators -->
        <cogov-home-collaborators></cogov-home-collaborators>

        <!-- footer -->
        <cogov-footer></cogov-footer>         
    </div>
</template>

<script>
    import cogovNav from '../../components/Nav/Nav.vue'
    import cogovNavOpen from '../../components/NavOpen/NavOpen.vue'
    import cogovHomeHeader from '../../components/Home/HomeHeader/HomeHeader.vue'
    import cogovHomeCollaborators from '../../components/Home/HomeCollaborators/HomeCollaborators.vue'
    import cogovHomeAbout from '../../components/Home/HomeAbout/HomeAbout.vue'
    import cogovHomeDetails from '../../components/Home/HomeDetails/HomeDetails.vue'
    import cogovHomePoweredBy from '../../components/Home/HomePoweredBy/HomePoweredBy.vue'
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
            cogovHomeHeader,
            cogovHomeCollaborators,
            cogovHomeAbout,
            cogovHomeDetails,
            cogovHomePoweredBy,
            cogovFooter
        }
    }
</script>

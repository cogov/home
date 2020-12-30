
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

        <!-- about header -->
        <cogov-about-header></cogov-about-header>

        <!-- about team -->
        <cogov-about-team></cogov-about-team>

        <!-- about details -->
        <cogov-about-details></cogov-about-details>        

        <!-- about collaborators -->
        <cogov-about-collaborators></cogov-about-collaborators>

        <!-- footer -->
        <cogov-footer></cogov-footer>         
    </div>
</template>

<script>
    import cogovNav from '../../components/Nav/Nav.vue'
    import cogovNavOpen from '../../components/NavOpen/NavOpen.vue'
    import cogovAboutHeader from '../../components/About/AboutHeader/AboutHeader.vue'
    import cogovAboutCollaborators from '../../components/About/AboutCollaborators/AboutCollaborators.vue'
    import cogovAboutTeam from '../../components/About/AboutTeam/AboutTeam.vue'
    import cogovAboutDetails from '../../components/About/AboutDetails/AboutDetails.vue'
    import cogovAboutPoweredBy from '../../components/About/AboutPoweredBy/AboutPoweredBy.vue'
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
            cogovAboutHeader,
            cogovAboutCollaborators,
            cogovAboutTeam,
            cogovAboutDetails,
            cogovAboutPoweredBy,
            cogovFooter
        }
    }
</script>

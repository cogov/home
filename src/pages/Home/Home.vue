
<template>
    <div class="home">
        <!-- navigation -->
        <cogov-nav-home></cogov-nav-home>

        <!-- home header -->
        <cogov-home-header></cogov-home-header>

        

        <!-- home collaborators -->
        <!-- <cogov-home-collaborators></cogov-home-collaborators> -->

        <!-- home about -->
        <cogov-home-about></cogov-home-about>

        <!-- home powered by -->
        <!-- <cogov-home-powered-by></cogov-home-powered-by> -->

        <!-- home details -->
        <cogov-home-details></cogov-home-details>        

        <cogov-home-collaborators></cogov-home-collaborators>


        <!-- contact -->
        <!-- <cogov-whitepaper></cogov-whitepaper> -->

        <!-- footer -->
        <cogov-footer></cogov-footer>         
    </div>
</template>

<script>
    import cogovNavHome from '../../components/NavHome/NavHome.vue'
    import cogovHomeHeader from '../../components/Home/HomeHeader/HomeHeader.vue'
    import cogovHomeCollaborators from '../../components/Home/HomeCollaborators/HomeCollaborators.vue'
    import cogovHomeAbout from '../../components/Home/HomeAbout/HomeAbout.vue'
    import cogovHomeDetails from '../../components/Home/HomeDetails/HomeDetails.vue'
    import cogovHomePoweredBy from '../../components/Home/HomePoweredBy/HomePoweredBy.vue'
    import cogovWhitepaper from '../../components/Whitepaper/Whitepaper.vue'
    import cogovFooter from '../../components/Footer/Footer.vue'

    export default {
        components: {
            cogovNavHome,
            cogovHomeHeader,
            cogovHomeCollaborators,
            cogovHomeAbout,
            cogovHomeDetails,
            cogovHomePoweredBy,
            cogovWhitepaper,
            cogovFooter
        }
    }
</script>


<template>
    <div class="home">
        <!-- navigation -->
        <cogov-nav></cogov-nav>

        <!-- home header -->
        <cogov-home-header></cogov-home-header>

        <cogov-home-collaborators></cogov-home-collaborators>

    </div>
</template>

<script>
    import cogovNav from '../../components/Nav/Nav.vue'
    import cogovHomeHeader from '../../components/Home/HomeHeader/HomeHeader.vue'
    import cogovHomeCollaborators from '../../components/Home/HomeCollaborators/HomeCollaborators.vue'

    export default {
        components: {
            cogovNav,
            cogovHomeHeader,
            cogovHomeCollaborators
        }
    }
</script>

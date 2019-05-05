
<template>
    <div class="home">
        <!-- navigation -->
        <cogov-nav></cogov-nav>

        <!-- home header -->
        <cogov-home-header></cogov-home-header>

        <!-- home collaborators -->
        <cogov-home-collaborators></cogov-home-collaborators>

        <!-- home about -->
        <cogov-home-about></cogov-home-about>

        <!-- contact -->
        <cogov-contact></cogov-contact>
    </div>
</template>

<script>
    import cogovNav from '../../components/Nav/Nav.vue'
    import cogovHomeHeader from '../../components/Home/HomeHeader/HomeHeader.vue'
    import cogovHomeCollaborators from '../../components/Home/HomeCollaborators/HomeCollaborators.vue'
    import cogovHomeAbout from '../../components/Home/HomeAbout/HomeAbout.vue'
    import cogovContact from '../../components/Contact/Contact.vue'

    export default {
        components: {
            cogovNav,
            cogovHomeHeader,
            cogovHomeCollaborators,
            cogovHomeAbout,
            cogovContact
        }
    }
</script>

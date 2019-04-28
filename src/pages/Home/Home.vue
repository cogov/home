
<template>
    <div class="home">
        <!-- navigation -->
        <cogov-nav></cogov-nav>


        <!-- home header -->
        <cogov-home-header></cogov-home-header>

    </div>
</template>

<script>
    import cogovNav from '../../components/Nav/Nav.vue'
    import cogovHomeHeader from '../../components/Home/HomeHeader/HomeHeader.vue'

    export default {
        components: {
            cogovNav,
            cogovHomeHeader
        }
    }
</script>

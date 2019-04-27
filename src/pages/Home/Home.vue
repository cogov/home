
<template>
    <div class="home">
        <cogov-nav></cogov-nav>
        <div class="home__backdrop--cover"></div>                

        <div class="home__backdrop">
                <video class="home__backdrop--video" playsinline autoplay muted loop>
                    <source src="./../../assets/videos/sacred-geo.mp4" type="video/mp4">
                </video>            
        </div>
        <!-- <div class="home__cover">
            <video class="home__video" playsinline autoplay muted loop>
                <source src="./../../assets/videos/sacred-geo.mp4" type="video/mp4">
            </video>
        </div> -->

    </div>
</template>

<script>
    import cogovNav from '../../components/Nav/Nav.vue'

    export default {
        components: {
            cogovNav
        }
    }
</script>

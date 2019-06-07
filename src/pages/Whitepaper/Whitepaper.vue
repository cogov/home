
<template>
    <div class="whitepaperPage">
        <!-- navigation -->
        <cogov-nav></cogov-nav>       

        <!-- contact -->
        <cogov-whitepaper></cogov-whitepaper>

        <!-- footer -->
        <cogov-footer></cogov-footer>         
    </div>
</template>

<script>
    import cogovNav from '../../components/Nav/Nav.vue'
    import cogovWhitepaper from '../../components/Whitepaper/Whitepaper.vue'
    import cogovFooter from '../../components/Footer/Footer.vue'

    export default {
        components: {
            cogovNav,
            cogovWhitepaper,            
            cogovFooter
        }
    }
</script>

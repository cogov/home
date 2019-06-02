
<template>
    <div class="about">
        <!-- navigation -->
        <cogov-nav></cogov-nav>       

        <!-- quote -->
        <cogov-about-quote></cogov-about-quote>

        <!-- contact -->
        <cogov-whitepaper></cogov-whitepaper>

        <!-- footer -->
        <cogov-footer></cogov-footer>         
    </div>
</template>

<script>
    import cogovNav from '../../components/Nav/Nav.vue'
    import cogovAboutQuote from '../../components/About/AboutQuote/AboutQuote.vue'
    import cogovWhitepaper from '../../components/Whitepaper/Whitepaper.vue'
    import cogovFooter from '../../components/Footer/Footer.vue'

    export default {
        components: {
            cogovNav,
            cogovAboutQuote,
            cogovWhitepaper,
            cogovFooter
        }
    }
</script>

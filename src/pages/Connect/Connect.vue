
<template>
    <div class="connect">
        <!-- navigation -->
        <cogov-nav></cogov-nav>       

        <!-- connect header -->
        <cogov-connect-header></cogov-connect-header>

        <!-- contact -->
        <cogov-whitepaper></cogov-whitepaper>

        <!-- footer -->
        <cogov-footer></cogov-footer>         
    </div>
</template>

<script>
    import cogovNav from '../../components/Nav/Nav.vue'
    import cogovWhitepaper from '../../components/Whitepaper/Whitepaper.vue'
    import cogovConnectHeader from '../../components/Connect/ConnectHeader.vue'
    import cogovFooter from '../../components/Footer/Footer.vue'

    export default {
        components: {
            cogovNav,
            cogovConnectHeader,
            cogovWhitepaper,
            cogovFooter
        }
    }
</script>

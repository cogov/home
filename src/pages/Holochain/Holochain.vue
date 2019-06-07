
<template>
    <div class="holochain">
        <!-- navigation -->
        <cogov-nav></cogov-nav>       
        
        <!-- holochain header -->
        <cogov-holochain-header></cogov-holochain-header>

        <!-- contact -->
        <cogov-whitepaper></cogov-whitepaper>

        <!-- footer -->
        <cogov-footer></cogov-footer>         
    </div>
</template>

<script>
    import cogovNav from '../../components/Nav/Nav.vue'
    import cogovHolochainHeader from '../../components/Holochain/HolochainHeader/HolochainHeader.vue'
    import cogovWhitepaper from '../../components/Whitepaper/Whitepaper.vue'
    import cogovFooter from '../../components/Footer/Footer.vue'

    export default {
        components: {
            cogovNav,
            cogovHolochainHeader,
            cogovWhitepaper,            
            cogovFooter
        }
    }
</script>

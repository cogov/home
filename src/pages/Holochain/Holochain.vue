
<template>
    <div class="holochain">
        <!-- navigation -->
        <cogov-nav></cogov-nav>       
        
        <!-- holochain header -->
        <cogov-holochain-header></cogov-holochain-header>

        <!-- holochain bullets -->
        <!-- <cogov-holochain-bullets></cogov-holochain-bullets> -->

        <!-- holochain cogov -->
        <cogov-holochain-cogov></cogov-holochain-cogov>        

        <!-- footer -->
        <cogov-footer></cogov-footer>         
    </div>
</template>

<script>
    import cogovNav from '../../components/Nav/Nav.vue'
    import cogovHolochainHeader from '../../components/Holochain/HolochainHeader/HolochainHeader.vue'
    import cogovHolochainBullets from '../../components/Holochain/HolochainBullets/HolochainBullets.vue'
    import cogovHolochainCogov from '../../components/Holochain/HolochainCoGov/HolochainCoGov.vue'
    import cogovWhitepaper from '../../components/Whitepaper/Whitepaper.vue'
    import cogovFooter from '../../components/Footer/Footer.vue'

    export default {
        components: {
            cogovNav,
            cogovHolochainHeader,
            cogovHolochainBullets,
            cogovHolochainCogov,
            cogovWhitepaper,            
            cogovFooter
        }
    }
</script>

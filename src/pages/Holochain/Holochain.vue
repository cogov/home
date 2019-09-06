
<template>
    <div class="holochain">
        <!-- navigation -->
        <cogov-nav>
            <div slot="navIcon" class="nav__icon" @click="navOpen = true">
                <a class="removelink">
                    <img src="../../assets/images/cogov__menu.png" alt="" class="nav__mobile">
                </a>
            </div>                    
        </cogov-nav>

        <!-- navigation -->
        <cogov-nav-open v-if="navOpen">
            <img @click="navOpen = false" slot="navClose" class="navOpen__nav--icon" src="../../assets/images/cogov__menu.png">                        
        </cogov-nav-open>    
        
        <!-- holochain header -->
        <cogov-holochain-header></cogov-holochain-header>

        <!-- holochain cogov -->
        <cogov-holochain-cogov></cogov-holochain-cogov>        

        <!-- footer -->
        <cogov-footer></cogov-footer>         
    </div>
</template>

<script>
    import cogovNav from '../../components/Nav/Nav.vue'
    import cogovNavOpen from '../../components/NavOpen/NavOpen.vue'
    import cogovHolochainHeader from '../../components/Holochain/HolochainHeader/HolochainHeader.vue'
    import cogovHolochainCogov from '../../components/Holochain/HolochainCoGov/HolochainCoGov.vue'
    import cogovFooter from '../../components/Footer/Footer.vue'

    export default {
        data() {
            return {
                navOpen: false  
            }
        },         
        components: {
            cogovNav,
            cogovNavOpen,
            cogovHolochainHeader,
            cogovHolochainCogov,
            cogovFooter
        }
    }
</script>

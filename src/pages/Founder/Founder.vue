
<template>
    <div class="about">
        <!-- navigation -->
        <cogov-nav>
            <div slot="navIcon" class="nav__icon" @click="navOpen = true">
                <a class="removelink">
                    <img src="/src/assets/images/cogov__menu.png" alt="" class="nav__mobile">
                </a>
            </div>                    
        </cogov-nav>

        <!-- navigation -->
        <cogov-nav-open v-if="navOpen">
            <img @click="navOpen = false" slot="navClose" class="navOpen__nav--icon" src="/src/assets/images/cogov__menu.png">                        
        </cogov-nav-open>       

        <!-- quote -->
        <cogov-founder-quote></cogov-founder-quote>

        <!-- founder -->
        <cogov-founder-founder></cogov-founder-founder>        

        <!-- footer -->
        <cogov-footer></cogov-footer>         
    </div>
</template>

<script>
    import cogovNav from '../../components/Nav/Nav.vue'
    import cogovNavOpen from '../../components/NavOpen/NavOpen.vue'
    import cogovFounderQuote from '../../components/Founder/FounderQuote/FounderQuote.vue'
    import cogovFounderFounder from '../../components/Founder/FounderFounder/FounderFounder.vue'
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
            cogovFounderQuote,
            cogovFounderFounder,
            cogovFooter
        }
    }
</script>

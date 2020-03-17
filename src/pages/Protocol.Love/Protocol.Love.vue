
<template>
    <div class="protocol">
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

        <!-- header -->
        <cogov-protocol-love-header></cogov-protocol-love-header>

        <!-- content -->
        <cogov-protocol-love-content></cogov-protocol-love-content>
    
        <!-- footer -->
        <cogov-footer></cogov-footer>         
    </div>
</template>

<script>
    import cogovNav from '../../components/Nav/Nav.vue'
    import cogovNavOpen from '../../components/NavOpen/NavOpen.vue'
    import cogovProtocolLoveHeader from '../../components/ProtocolLove/ProtocolLoveHeader/ProtocolLoveHeader.vue'
    import cogovProtocolLoveContent from '../../components/ProtocolLove/ProtocolLoveContent/ProtocolLoveContent.vue'
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
            cogovProtocolLoveHeader,
            cogovProtocolLoveContent,
            cogovFooter
        }
    }
</script>

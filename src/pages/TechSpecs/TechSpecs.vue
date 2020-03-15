
<template>
    <div class="protocol">
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

        <!-- header -->
        <cogov-tech-specs-header></cogov-tech-specs-header>

        <!-- content -->
        <cogov-tech-specs-content></cogov-tech-specs-content>
    
        <!-- footer -->
        <cogov-footer></cogov-footer>         
    </div>
</template>

<script>
    import cogovNav from '../../components/Nav/Nav.vue'
    import cogovNavOpen from '../../components/NavOpen/NavOpen.vue'
    import cogovTechSpecsHeader from '../../components/TechSpecs/TechSpecsHeader/TechSpecsHeader.vue'
    import cogovTechSpecsContent from '../../components/TechSpecs/TechSpecsContent/TechSpecsContent.vue'
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
            cogovTechSpecsHeader,
            cogovTechSpecsContent,
            cogovFooter
        }
    }
</script>

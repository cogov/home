
<template>
    <div class="nav">
        <a href="/" class="removelink">
            <div class="nav__logo--container">
                <img class="nav__logo--image" src="../../assets/images/cogov__logo--blue.png" alt="">
                <p class="nav__logo--text">CoGov</p>            
            </div>        
        </a>
        <div class="nav__items">
            <div class="nav__item">
                <a href='/vision'  class="removelink">Vision</a>
            </div>          
            <div class="nav__item">
                <a href='/protocol.love' class="removelink">Protocol.Love</a>
            </div>  
            <div class="nav__item">
                <a href='/specs' class="removelink">Tech Specs</a>
            </div>           
            <div class="nav__item">
                <a href='/ecosystem' class="removelink">Ecosystem</a>
            </div>      
            <div class="nav__item">
                <a href='/services' class="removelink">Services</a>
            </div>                                
            <div class="nav__item">
                <a href='/team/raymond-d-powell' class="removelink">Founder</a>
            </div>         
            <div class="nav__item">
                <a href='/holochain' class="removelink">Holochain</a>
            </div>   
            <div class="nav__item">
                <a href='/declaration' class="removelink">Declaration</a>
            </div>                        
            <div class="nav__item">
                <a href='/connect' class="removelink">Connect</a>
            </div>

            <a href="https://cogov.typeform.com/to/kMtTYt" target="blank" class="removelink">
                <div class="nav__button">
                    Whitepaper
                </div>
            </a>

            <slot name="navIcon"></slot>
        </div>

    </div>
</template>


<template>
    <div class="navOpen">
        <div class="navOpen__nav">
            <p class="navOpen__nav--item">&nbsp;</p>
            <slot name="navClose"></slot>
        </div>
        <div class="navOpen__body">
            <a href="/" class="navOpen__body--item removelink">
                Home
            </a>
            <a href="/protocol.love" class="navOpen__body--item removelink">
                Protocol.Love
            </a>
            <a href='/specs' class="navOpen__body--item removelink">Tech Specs</a>
            <a href='/ecosystem' class="navOpen__body--item removelink">Ecosystem</a>
            <a href="/services" class="navOpen__body--item removelink">
                Services
            </a>            
            <a href="/team/raymond-d-powell" class="navOpen__body--item removelink">
                Founder
            </a>
            <a href="/holochain" class="navOpen__body--item removelink">
                Holochain
            </a>   
            <a href="/declaration" class="navOpen__body--item removelink">
                Declaration of <br/>Collaborative Governance
            </a>                          
            <a href="/connect" class="navOpen__body--item removelink">
                Connect
            </a>                                           
                                      
            <!--a href="/the-protocol" class="navOpen__body--item removelink">
                The CoGov Protocol
            </a -->                                           
        </div>
    </div>
</template>
 
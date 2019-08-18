<template>
    <div class="homeHeader">
        <!-- backdrop -->
        <div class="homeHeader__backdrop--cover"></div>                
        <div class="homeHeader__backdrop">
                <video class="homeHeader__backdrop--video" playsinline autoplay muted loop>
                    <source src="./../../../assets/videos/sacred-geo.mp4" type="video/mp4">
                </video>            
        </div>        

        <div class="homeHeader__content">
            <h2 class="homeHeader__title">Welcome to CoGov</h2>
            <h3 class="homeHeader__subtitle">We empower the rapid creation of new social systems </h3>
            <!-- <p class="homeHeader__description">CoGov fosters a new era of rapid iterations of software solutions that enhance social coordinative capacity at all scales. By allowing people to transparently curate resources, make sense, and make decisions, CoGov enables people and groups to experiment with new ways of social coordination and empower themselves.</p> -->
            <a href="#homeAbout" class="removelink"><button class="homeHeader__action">Learn How</button></a>
        </div>
    </div>
</template>
 
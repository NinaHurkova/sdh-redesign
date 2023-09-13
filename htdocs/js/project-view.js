$(document).ready(function() {
    function initFeaturesSlider(){
         $('#features').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
             speed: 600,
             easing: 'swing',
             vertical: true,
             arrows: false,
             centerMode: true,
             infinite: true,
            responsive: [
                {
                    breakpoint: 1120,
                    settings: "unslick"
                }
            ]
        });
    }

    // initFeaturesSlider();
});

// $(window).on("resize", initFeaturesSlider);
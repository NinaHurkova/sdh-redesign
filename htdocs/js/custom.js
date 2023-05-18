$(document).ready(function() {
    $('.selectpicker').select2({
        minimumResultsForSearch: Infinity,
        dropdownParent: $('.select-lang'),
        width: 'style'
    });
    
    const fileInput  = $( ".input-file" ),  
        button = $( ".input-file-label" ),
        resultFile = $(".file-return");
      
    // button.on( "keydown", function( event ) {
    //     if ( event.keyCode == 13 || event.keyCode == 32 ) {
    //         fileInput.focus();
    //     }
    // });
    // button.on( "click", function( event ) {
    //    fileInput.focus();
    //    return false;
    // });
    fileInput.on( "change", function( event ) {
        $(resultFile)[0].innerHTML = this.value;
    });



    // moveOnScroll();

    initFeaturesSlider();

});

function inViewport(el) {
  const lBound = $(window).scrollTop(),
    uBound = lBound + $(window).height(),
    top = el.offset().top,
    bottom = top + el.outerHeight(true);

  return (top > lBound && top < uBound) ||
    (bottom > lBound && bottom < uBound) ||
    (lBound >= top && lBound <= bottom) ||
    (uBound >= top && uBound <= bottom);
}


function moveOnScroll(){
    const firstRow = $('.technology-row.left'),
        secondRow = $('.technology-row.right'),
        docHeight = $(document).height(),
        docWidth = $(window).width(),
        winHeight = $(window).height(),
        technology = $('.technology-grid');

    let totalWidth = 0;

    console.log('width', $(window).width())

    firstRow.children().each(function() {
          totalWidth = totalWidth + $(this)[0].offsetWidth;
    });

    $(window).scroll(function() {
        const canUserSeeIt = inViewport(technology);

        const s = $(this).scrollTop();

        const scrollPercent = (s / (docHeight - winHeight));

        const position = (scrollPercent * (docWidth - totalWidth));


        if(canUserSeeIt && window.matchMedia("(min-width: 992px)").matches){
            firstRow.css('transform', 'translate3d(-' + position + 'px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)');
            secondRow.css('transform', 'translate3d(' + position + 'px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)');
        }else{
            firstRow.css('transform', 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)');
            secondRow.css('transform', 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)');
        }
    });
}

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

$(window).on("resize", initFeaturesSlider, false);
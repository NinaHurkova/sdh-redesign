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

    const input = document.querySelector("#phone");
    window.intlTelInput(input, {
        utilsScript: "htdocs/js/telInput/utils.js"
    });


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

// $(window).on("resize", moveOnScroll, false);
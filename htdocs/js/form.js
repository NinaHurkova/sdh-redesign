$(document).ready(function() {
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
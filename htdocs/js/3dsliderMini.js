$(document).ready(function() {
    $('.slider-rotate-slide').on('click', function () {
        const slider = $(this).parents('.slider-rotate-mini');
        slider.find('.slider-rotate-slide').removeClass('active');
        $(this).addClass('active');
    });
});
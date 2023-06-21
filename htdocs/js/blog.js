$(document).ready(function () {
    const headerHeight = $('header').height();

    $('.top-header').each(function () {
        $(this).css('top', headerHeight);
    })
    
    $('.one-blog-text table').each(function () {
        $(this).wrapAll('<div class="table-wrapper"></div>');
    })
});
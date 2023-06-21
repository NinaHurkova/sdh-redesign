$(document).ready(function() {
    $('.selectpicker').select2({
        minimumResultsForSearch: Infinity,
        dropdownParent: $('.select-lang'),
        width: 'style'
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
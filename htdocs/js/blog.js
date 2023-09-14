$(document).ready(function () {
    const headerHeight = $('header').height();

    $('.top-header').each(function () {
        $(this).css('top', headerHeight);
    });
    
    $('.one-blog-text table').each(function () {
        $(this).wrapAll('<div class="table-wrapper"></div>');
    });

    $('.contents-list a[href^="#"]').on('click', function(event) {
      var target = $(this.getAttribute ('href') );
      if (target.length) {
        event.preventDefault();
        $('html, body').animate( {
          scrollTop: target.offset().top - headerHeight
        }, 600);
      }
    });
});

const anchors = $('.one-blog-text').find('[id]');

$(window).scroll(function(){
    var scrollTop = $(document).scrollTop();

    // highlight the last scrolled-to: set everything inactive first
    for (var i = 0; i < anchors.length; i++){
    		$('.contents-list a[href="#' + $(anchors[i]).attr('id') + '"]').removeClass('active');
    }

    // then iterate backwards, on the first match highlight it and break
    for (var i = anchors.length-1; i >= 0; i--){
        if (scrollTop > $(anchors[i]).offset().top - $('header').height() - 20) {
            $('.contents-list a[href="#' + $(anchors[i]).attr('id') + '"]').addClass('active');
            break;
        }
    }
});
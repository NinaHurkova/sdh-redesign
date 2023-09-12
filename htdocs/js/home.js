

$(document).ready(function() {
    // Animated title
    let textContainer = $('.title-animated-container h1');
    let colorHover = $('.shape');
    textContainer.on('mousemove', e => {
      let rect = e.target.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;
      colorHover.css('--x', x + 'px');
      colorHover.css('--y', y + 'px');
    });
    const shape = $('.title-animated').find('.shape'),
        title = $('.title-animated').find('h1');

    $(title).mouseenter(function() {
        $(shape).css('--size', '484px');
    }).mouseleave(function() {
        $(shape).css('--size', '0');
    });

    // Horizontal scroll for projects
    $('.projects-scroll').each(function () {
        const scrollRow = $(this).find('.projects-scroll-grid'),
            leftButton = $(this).find('button.left'),
            buttons = $(this).find('.projects-scroll-buttons'),
            rightButton = $(this).find('button.right');

        let totalWidth = 0;
        scrollRow.find('.projects-card').each(function(){
            totalWidth += $(this).width()
        });

        const firstCard = scrollRow.children('.projects-card').first(),
            firstCardPosition = firstCard.position(),
            lastCard = scrollRow.children('.projects-card').last();

        if(totalWidth <= $(this).width()){
            $(buttons).hide();
        }else{
            $(rightButton).on('click', function () {
                event.preventDefault();
                if(firstCardPosition.left - firstCard.position().left > 0){
                    leftButton.removeClass('inactive');
                }else{
                    leftButton.addClass('inactive');
                }
                if(lastCard.position().left + lastCard.width() - (scrollRow.position().left + scrollRow.width()) < 100){
                    rightButton.addClass('inactive');
                }else{
                    rightButton.removeClass('inactive');
                }
                $(scrollRow).animate({
                    scrollLeft: "+=562px"
                }, "slow");
            });
            $(leftButton).on('click', function () {
                event.preventDefault();
                if(firstCardPosition.left - firstCard.position().left > 0){
                    leftButton.removeClass('inactive');
                }else{
                    leftButton.addClass('inactive');
                }
                if(lastCard.position().left + lastCard.width() - (scrollRow.position().left + scrollRow.width()) < 100){
                    rightButton.addClass('inactive');
                }else{
                    rightButton.removeClass('inactive');
                }
                $(scrollRow).animate({
                    scrollLeft: "-=562px"
                }, "slow");
            });
        }
    });





    const myCollapsible = $('.accordion-collapse');
    myCollapsible.each(function () {
        $(this).on('shown.bs.collapse', function () {
            const targetImg = $(this).data('link'),
                targetPosition = $('#' + targetImg).data('position');
            $('.services-img-item').each(function () {
                const place= $(this).data('position');
                if(place > targetPosition) {
                    $(this).css('--position', place - targetPosition);
                } else if(place < targetPosition) {
                    $(this).css('--position', 6 - targetPosition + place) ;
                }
            });
            $('#' + targetImg).css('--position', 0);
        })
    });
});
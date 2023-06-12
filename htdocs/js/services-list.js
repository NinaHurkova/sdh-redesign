$(document).ready(function() {
    $('.slider-rotate-slide').on('click', function () {
        const slider = $(this).parents('.slider-rotate-mini');
        slider.find('.slider-rotate-slide').removeClass('active');
        $(this).addClass('active');
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
});

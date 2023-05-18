
$(document).ready(function() {
    // Animated title
    let textContainer = document.querySelector('.title-home');
    let colorHover = document.querySelector('.shape');
    textContainer.addEventListener('mousemove', e => {
      let rect = e.target.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;
      colorHover.style.setProperty('--x', x + 'px');
      colorHover.style.setProperty('--y', y + 'px');
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
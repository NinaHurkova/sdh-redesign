const screenHeight = $(window).height() - $('.header').height();
        let triggerStart = screenHeight/3;
        let triggerStop = screenHeight*2/3;
        let imgPath = 'htdocs/img/projects/';

        $(window).scroll(function () {
            $('.features-slider').children().each(function () {
                if($(this)[0].getBoundingClientRect().top > triggerStart && $(this)[0].getBoundingClientRect().top < triggerStop){
                    $(this).addClass('active');
                    if($(this).attr('data-image')){
                        let imageUrl = imgPath + $(this).attr('data-image');
                        $('.features-img').css(
                            "background-image",
                            'url(' + imageUrl + ')'
                        )
                    }
                }else{
                    $(this).removeClass('active')
                }
            })
        });
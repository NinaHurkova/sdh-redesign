$(document).ready(function () {
    let scrollRow = $('.scroll-row');

    function renderRightBlocks(target) {

        const isLastElVisible = $(target).children().last().visible();
        const cloneIndex = $(target).children('.clone').last()?.attr('data-clone-index') || 0;

        if (isLastElVisible) {

            const cloneEl = $(target).children().eq(+cloneIndex + 1).clone();

            cloneEl.addClass('clone');
            cloneEl.attr('data-clone-index', +cloneIndex + 1);
            $(target).append(cloneEl);

            renderRightBlocks(target)
        }

    }

    function fillRightBlocks(target) {

        const width = $(this).width();

        let childrenWidth = 0;
        $(target).children().each(function () {
            childrenWidth += $(this).outerWidth();
        });

        if (childrenWidth < width) {

            const cloneIndex = $(target).children('.clone').last()?.attr('data-clone-index') || 0;
            const cloneEl = $(target).children().eq(+cloneIndex + 1).clone();

            cloneEl.addClass('clone');
            cloneEl.attr('data-clone-index', +cloneIndex + 1);
            $(target).append(cloneEl);

            fillRightBlocks(target)
        }
    }

    function renderLeftBlocks(target) {
        const isFirstElVisible = $(target).children().eq(0).visible();
        let cloneIndex = $(target).children('.clone').first()?.attr('data-clone-index') || $(target).children().not('.clone').length - 1;
        cloneIndex = +cloneIndex - 1 < 0 ? $(target).children().not('.clone').length - 1 : +cloneIndex - 1;

        if (isFirstElVisible) {
            const cloneEl = $(target).children().not(".clone").eq(+cloneIndex).clone();

            cloneEl.addClass('clone');
            cloneEl.attr('data-clone-index', cloneIndex);
            $(target).prepend(cloneEl);

            renderLeftBlocks(target)
        }

    }


    function fillLeftBlocks(target, index) {

        const width = $(this).width();
        let childrenWidth = 0;

        $(target).children().each(function () {
            childrenWidth += $(this).width();
        });

        const initChildrenElements = $(target).children().not(".clone").length - 1

        if (childrenWidth < width) {

            const cloneIndex = index < 0 ? initChildrenElements : index;
            const cloneEl = $(target).children().not(".clone").eq(+cloneIndex).clone();

            cloneEl.addClass('clone');
            cloneEl.attr('data-clone-index', cloneIndex);

            $(target).prepend(cloneEl);

            fillLeftBlocks(target, cloneIndex - 1)
        }
    }


    scrollRow.each(function () {
        let offset = this.getBoundingClientRect();
        let top = offset.top;

        if ($(this).hasClass('left')) {
            $(this).css('--x', (top - window.innerHeight) * (100 / window.innerHeight) + '%');
            fillRightBlocks(this);
        } else {
            $(this).css('--x', (top - window.innerHeight) * (100 / window.innerHeight) * (-1) + '%');
            fillLeftBlocks(this, $(this).children().length - 1);
        }
    });

    const onScroll = function () {
        scrollRow.each(function () {
            let offset = this.getBoundingClientRect();
            let top = offset.top;

            if (top < window.innerHeight && top >= 0) {
                if ($(this).hasClass('left')) {
                    $(this).css('--x', (top - window.innerHeight) * (100 / window.innerHeight) + '%');
                    renderRightBlocks(this);
                } else {
                    $(this).css('--x', (top - window.innerHeight) * (100 / window.innerHeight) * (-1) + '%');
                    renderLeftBlocks(this)
                }
            }
        })
    }

    $(window).scroll(onScroll);
});
//jQuery to collapse the navbar on scroll
$(window).scroll(function () {
    var item = $(".header");
    if (item.offset().top > 10) {
        item.addClass("fixed");
    } else {
        item.removeClass("fixed");
    }

    ScrollMenu();
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    $(document).on('click', 'a.page-scroll', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top -40
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });
});


function ScrollMenu() {
    var scrollPos = $(document).scrollTop() +40;
    $('.js-navigation a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.js-navigation ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else {
            currLink.removeClass("active");
        }
    });
}
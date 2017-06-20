'use strict';
// fixed svg show
//-----------------------------------------------------------------------------
function fixedSvg() {
    var baseUrl = window.location.protocol + '//' + window.location.host + window.location.pathname + window.location.search;
    $('use').filter(function() {
        return ($(this).attr("xlink:href").indexOf("#") > -1);
    }).each(function() {
        $(this).attr("xlink:href", baseUrl + $(this).attr("xlink:href").split('/').slice(-1)[0]);
    });
}

fixedSvg();

// checking if element for page
//-----------------------------------------------------------------------------------
function isOnPage(selector) {
    return ($(selector).length) ? $(selector) : false;
}


$(window).scroll(function(){
    var $elem = $('.header'),
        $top = $(this).scrollTop();

    if ($top < 10) {
        $elem.removeClass('fixed')
    } else {
        $elem.addClass('fixed')
    }
});

$('.list-link').on('mouseover', 'li', function (e) {
    e.preventDefault();
    $('.list-link li').css('opacity', '0.5');
    $(this).css('opacity', '1');
    console.log('----- ' + 1);

});

$('.list-link').on('mouseout', 'li', function (e) {
    e.preventDefault();
    $('.list-link li').css('opacity', '1');
    console.log('----- ' + 2);

});

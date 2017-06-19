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

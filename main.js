/*
Shark Team
5/3/18
*/

$(document).ready(function(){
    $('html, body').css('scrollTop','0')
    var windowHeight = $(window).height();
    var yNav = $('.NavSelected').offset().top
    
    var yNavTop = windowHeight + yNavTop;
    console.log(yNav)
    $(this).scroll(function(){
        fixNav(this,yNav);
    });

});
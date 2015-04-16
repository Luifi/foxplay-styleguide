// ==========================================================================
// Main JS
// ==========================================================================

$(document).ready(function(){

    // Active Navs

    var activeNav = function(item, items) {
        $(items).parent().siblings().removeClass('is-active');
        $(item).parent().addClass('is-active');
    }

    $('.nav a').click(function(){
        activeNav(this, this);
    });

    // Fix Nav Styleguide

    var $nav = $('.nav-vertical');
    var heightH = $('header').height();

    var w = $(window).width();

    $(document).on("scroll", function() {

        if($(this).scrollTop() >= heightH && w >= 980) {
            $nav.addClass('is-fixed');
            $nav.css('margin-top', -(heightH + 30));

        } else {
            $nav.removeClass('is-fixed');
            $nav.css('margin-top', '0');
        }
    });












});
// ==========================================================================
// Main JS
// ==========================================================================

$(document).ready(function(){

    // Active Navs

    var activeNav = function(item, items) {
        $(items).parent().siblings().removeClass('active');
        $(item).parent().addClass('active');
    }

    $('.nav a').click(function(){
        activeNav(this, this);
    });

    // Fix Nav Styleguide

    var $nav = $('.nav-vertical');
    var heightH = $('header').height();

    console.log(heightH);

    $(document).on("scroll", function() {

        if($(this).scrollTop() >= heightH) {
            $nav.addClass('is-fixed');
            $nav.css('margin-top', -(heightH + 30));

        } else {
            $nav.removeClass('is-fixed');
            $nav.css('margin-top', '0');
        }
    });












});
// ==========================================================================
// Main JS
// ==========================================================================

$(document).ready(function(){

    // Activa Navs

    var activeNav = function(active, list) {
        $(list).removeClass('active');
        $(active).addClass('active');
    }

    $('nav ul li a').click(function(){
        activeNav(this, 'nav ul li a');
    });

    // Fix Nav Styleguide

    var $nav = $('.nav-vertical');
    var heightH = $('header').height();

    $(document).on("scroll", function() {

        if($(this).scrollTop() >= heightH) {
            $nav.addClass('is-fixed');
            $nav.css('margin-top', '-310px');

        } else {
            $nav.removeClass('is-fixed');
            $nav.css('margin-top', '0');
        }
    });












});
// ==========================================================================
// Main JS
// ==========================================================================

$(document).ready(function(){

    // Active Navs

    var activeNav = function(active, item) {
        $(item).parent().siblings().children().removeClass('active');
        $(active).addClass('active');
    }

    $('.nav a').click(function(e){
        e.preventDefault();
        activeNav(this, this);
    });

    // Fix Nav Styleguide

    var $nav = $('.nav--vertical');
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
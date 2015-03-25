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










});
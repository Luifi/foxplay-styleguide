$(document).ready(function(){var s=function(s,a){$(a).parent().siblings().removeClass("active"),$(s).parent().addClass("active")};$(".nav a").click(function(){s(this,this)});var a=$(".nav-vertical"),i=$("header").height();console.log(i),$(document).on("scroll",function(){$(this).scrollTop()>=i?(a.addClass("is-fixed"),a.css("margin-top",-(i+30))):(a.removeClass("is-fixed"),a.css("margin-top","0"))})});
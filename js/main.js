function listenScroll(a){const o=new Debouncer(a);window.addEventListener("scroll",o,false);o.handleEvent()}function scrollToElement(a,o){var r=$(a).offset();$("body,html").animate({scrollTop:r.top+(o||0),easing:"swing"})}function navbarScrollEvent(){var a=$("#navbar");var o=$("#navbar .dropdown-menu");if(a.offset().top>0){a.addClass("navbar-custom");a.removeClass("navbar-dark");o.addClass("navbar-custom");o.removeClass("navbar-dark")}listenScroll(function(){a[a.offset().top>50?"addClass":"removeClass"]("top-nav-collapse");o[a.offset().top>50?"addClass":"removeClass"]("dropdown-collapse");if(a.offset().top>0){a.addClass("navbar-custom");a.removeClass("navbar-dark");o.addClass("navbar-custom");o.removeClass("navbar-dark")}else{a.addClass("navbar-dark");o.removeClass("navbar-dark")}});$("#navbar-toggler-btn").on("click",function(){$(".animated-icon").toggleClass("open");$("#navbar").toggleClass("navbar-col-show")})}function parallaxEvent(){var n=$('#background[parallax="true"]');var a=function(){var a=$(window).scrollTop()/5;var o=parseInt($("#board").css("margin-top"),0);var r=96+o;if(a>r){a=r}n.css({transform:"translate3d(0,"+a+"px,0)","-webkit-transform":"translate3d(0,"+a+"px,0)","-ms-transform":"translate3d(0,"+a+"px,0)","-o-transform":"translate3d(0,"+a+"px,0)"});var t=$("#toc");if(t){$("#toc-ctn").css({"padding-top":a+"px"})}};if(n.length>0){listenScroll(a)}}function scrollDownArrowEvent(){$(".scroll-down-bar").on("click",function(){scrollToElement("#board",-$("#navbar").height())})}function scrollTopArrowEvent(){var t=$("#scroll-top-button");if(!t){return}var n=false;var s=false;var a=function(){var a=document.getElementById("board").getClientRects()[0].right;var o=document.body.offsetWidth;var r=o-a;n=r>=50;t.css({bottom:n&&s?"20px":"-60px",right:r-64+"px"})};a();$(window).resize(a);var o=$("#board").offset().top;listenScroll(function(){var a=document.body.scrollTop+document.documentElement.scrollTop;s=a>=o;t.css({bottom:n&&s?"20px":"-60px"})});t.on("click",function(){$("body,html").animate({scrollTop:0,easing:"swing"})})}$(document).ready(function(){navbarScrollEvent();parallaxEvent();scrollDownArrowEvent();scrollTopArrowEvent()});function switchDarkMode(){if($("body").hasClass("dark")){$("#dark").html("🌞");document.body.classList.remove("dark");localStorage.setItem("noDark","1");localStorage.setItem("dark","0")}else{$("#dark").html("🌙");document.body.classList.add("dark");localStorage.setItem("dark","1");localStorage.setItem("noDark","0")}}
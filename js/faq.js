/* FAQ___________________ */

$(document).ready(function(){

  $(".title").click(function(){

    $(this).siblings(".title").removeClass("active");
    $(this).toggleClass("active"); //화살표 변형 효과
    $(this).siblings(".content").stop().slideUp();
    $(this).next().stop().slideToggle();

  });



});
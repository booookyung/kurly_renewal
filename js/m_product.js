$(document).ready(function(){

  $(".box1 ul li").hover(function(){
    $(this).find(".text").stop().animate({bottom:"0px"});
  },function(){
    $(this).find(".text").stop().animate({bottom:"-120px"});
  });

  $(".box2 ul li").hover(function(){
    $(this).find(".text").stop().animate({bottom:"0px"});
  },function(){
    $(this).find(".text").stop().animate({bottom:"-120px"});
  });

});

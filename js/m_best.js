$(document).ready(function(){
	
	//TopMenu Over......
  $(".topmenu>.m1").hover(function(){
    $(this).find(".m2").stop().animate({marginTop:"-65px"},250);
	},function(){
    $(this).find(".m2").stop().animate({marginTop:"0px"},250);
  });


  //스크롤시 내려오는 고정된 탑메뉴.....
  $(window).scroll(function(){

    if ($(this).scrollTop()>300){
			$(".nav_fix").css("margin-top", "0px");
		} else {
			$(".nav_fix").css("margin-top", "-100px");
		}

  });


  // 이미지 오버시...
  $(".image-wrapper").hover(function(){
    $(this).find("strong,span").stop().animate({opacity:1},300);
  },function(){
    $(this).find("strong,span").stop().animate({opacity:0},300);
  });




});
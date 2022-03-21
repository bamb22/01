$(function(){


	// 상단 네비게이션 스크롤 이동
	var menuItem = $('.gnb a, #navi h1 a');

	menuItem.click(function(){
		var el = $(this).attr('href');
		var elWrap = $(el);
		// console.log(el);

		scrollToDiv(elWrap, 0);
	});


	// 상단 네비게이션 스크롤 이동 함수
	function scrollToDiv(element, navHeight){
		33
		var offset = element.offset().top;		
		var totalScroll = offset - navHeight;

		$('html, body').animate({scrollTop: totalScroll}, 600);
	}


});
$(function(){

  // // WOW JS 실행함수 선언
  //   new WOW().init();

  //swim
  $('.img2').animate({
          'right': -120, 
          'top' : -120
        }, 400).animate({
          'right': -70, 
          'top' : -70
        }, 400).animate({
          'right': -10, 
          'top' : -17
        }, 400);

  $('.img1').animate({
          'left': -200, 
          'bottom' : -230
        }, 400).animate({
          'left': -150, 
          'bottom' : -180
        }, 400).animate({
          'left': -60, 
          'bottom' : -120
        }, 400);



  //NAVI
  var mobileBtn = $('.mobile-btn');

    mobileBtn.click(function(){ 
      $(this).toggleClass('navi-act');
      $('#navi .gnb').slideToggle(400);
    });
 

  // What i do 호버
  $('.list-img').hover(
    function(){
      $(this).next().css('color', '#d6a0e5');
    },
    function(){
      $(this).next().css('color', '#bfbfbf');
    }
  );
  
  //Waypoint
  var whatido = $('#whatido');
  var about = $('#about');


  function inProgress(){
      // circle-progress JS
      $('.one.circle').circleProgress({
        value: 0.93,
        size: 120
      }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(93 * progress) + '<i>%</i>');
      }); 

      $('.two.circle').circleProgress({
        value: 0.9,
        size: 120
      }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(90 * progress) + '<i>%</i>');
      }); 

      $('.three.circle').circleProgress({
        value: 0.87,
        size: 120
      }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(87 * progress) + '<i>%</i>');
      }); 

      $('.four.circle').circleProgress({
        value: 0.72,
        size: 120
      }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(72 * progress) + '<i>%</i>');
      }); 
  }

  about.waypoint(function(direction){
    if( direction == 'down' ){
      new WOW().init();
    }
  }, {offset:'65%'});
  

  whatido.waypoint(function(direction){
    if( direction == 'down' ){
      new WOW().init();
      inProgress();
    }
  }, {offset:'65%'});


  



  // act     
  var gmenuItem = $('#portfolio .gmenu ul li');   
 
  $('#portfolio .gmenu ul li:nth-child(1)').addClass('act');

 	gmenuItem.click(function(){
 		$(this).addClass('act').siblings().removeClass('act');
 	});


  //포트폴리오
  var grid = $('.grid');

  // 초기값 설정
  grid.isotope({       
    itemSelector: '.grid-item',     
    masonry: {
      columnWidth: '.grid-item'
    }
  });


  $('.popup-modal').magnificPopup({
   type:'inline', 
   gallery:{
    enabled:true
   },
   closeOnBgClick: true
  });
  

  // magnificPopup JS - Image Sample.        
  $('#m0').click(function(){
    grid.isotope({ filter: '.grid-item' });

    $('.popup-modal').magnificPopup({
     type:'inline', 
     gallery:{
      enabled:true
     },
     closeOnBgClick: true
    });

    event.preventDefault();
  });

  $('#m1').click(function(){
    grid.isotope({ filter: '.g1' });
    event.preventDefault();
  });

  $('#m2').click(function(){
    grid.isotope({ filter: '.g2' });

    $('.p2').magnificPopup({
     type:'inline', 
     gallery:{
      enabled:true
     },
     closeOnBgClick: true
    });

    event.preventDefault();
  });

  $('#m3').click(function(){
    grid.isotope({ filter: '.g3' });

    $('.p3').magnificPopup({
     type:'inline', 
     gallery:{
      enabled:true
     },
     closeOnBgClick: true
    });

    event.preventDefault();
  });


  // Popup Close Btn Setting
  var closeBtn = $('.white-popup p a');

  closeBtn.click(function(){
    $.magnificPopup.close();

    event.preventDefault();
  });



});
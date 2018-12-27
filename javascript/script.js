//fullpage ,gnb_rudolph 이동, 상단판자 이벤트
var page = 0; //페이지인덱스(페이지첫인덱스가0이다)
var sceneNum01 = true;
var tapflag = false;
var nice = false;
var rudolph_play_animation=0;
var santa_play_animation=0;
var tree_play_animation=0;
var switch_scroll_event = true;
//var rudolph_head_flag = false;
//var santa_head_flag = false;
//var tree_head_flag = false;
$(document).ready(function() {
  nice = $('.hidden_box').nicescroll({
    cursorcolor: "#777",
    cursorwidth: 5,
    scrollspeed: 40,
    cursorborderradius: '0',
    mousescrollstep: 40,
    cursoropacitymin: 0,
    cursoropacitymax: 1,
    cursorborder: "none",
    autohidemode: false,
    boxzoom: true,
    zindex: -99999
  });


});
console.log(nice);
//<-------------------end--------------------->

//<------------전체 function 시작--------------->
$(function() { //$(function(){}) 이 부분이 jquery에서 처음으로 jquery와 html이 로드 됬을때 초기설정을 뜻해
  $('.box_all').find('img').hide();
  //        $('#box_cosmetic').find('img').hide();
  //        $('#box_star').find('img').hide();
  //        $('#popup_illust').find('img').hide();
  $("#scene02 .top_01").css("marginTop",-200); //위치초기화
  $("#scene03 .top_02").css("marginTop",-200); //위치초기화
  $("#scene04 .top_03").css("marginTop",-200); //위치초기화


  // 초기설정 부분에서 유정이가 원하는 이미지에 대해서 hide! 숨긴다.
  //<--scene01에서 bell-->
  TweenMax.set("#scene01 .bell", {
    rotation: -8
  });
  TweenMax.to("#scene01 .bell", 2, {
    rotation: 8,
    transformOrigin: "50% 0%",
    yoyo: true,
    repeat: -1,
    ease: Power1.easeInOut
  }).timeScale(1.2);

  //<--scene02에서 book안의 오르골 클릭타이포-->
  TweenMax.to("#scene02 .orgel_click_typo", 3, {
    y: -10,
    yoyo: true,
    repeat: -1,
    repeatDelay: 0,
    ease: Power1.easeInOut
  }).timeScale(2.5);

  //<--scene03에서 book안의 인스타 타이포-->
  TweenMax.to("#scene03 #insta_typo", 2.5, {
    y: -9,
    yoyo: true,
    repeat: -1,
    repeatDelay: 0,
    ease: Power1.easeInOut
  }).timeScale(2.5);

  //<--scene03에서 book안의 button 화살표-->
    TweenMax.to("#scene03 .button_arrow_1", 2, {
        x:12,
        autoAlpha:0,
        visibility: true,
        repeat: -1,
        ease: Linear.easeOut
    }).timeScale(1.5);
    TweenMax.to("#scene03 .button_arrow_2", 2, {
        x:12,
        autoAlpha:0,
        visibility: true,
        repeat: -1,
        ease: Linear.easeOut
    }).timeScale(1.5).delay(0.5);


//    scene02 구름 모션
//        TweenMax.to(this,HEROPY.random(3, 4), {
//                delay: 0.8 * p,
//                x: 20,
//                yoyo: true,
//                repeat: -1,
//                ease: Power1.easeInOut
//            });



  //<----------------이미지 애니메이션들---------------->
  //<--scene02에서 이민호 hand_shaking-->
  function aniImg(aniName) {
    var downup = 0;

    function animation() {
      if (j == 0 && downup == 1) {
        downup = 0;

      } else if (j == t && downup == 0) {
        downup = 1;
      }

      if (downup == 0)
        j++;
      else
        j--;

      $(aniName).find('p').hide().eq(j).show();
      setTimeout(animation, speed);
    };

    var total = $(aniName).find('p').length - 1;

    var j = 0
    var t = total;
    var speed = 150
    animation()
  }

  function aniImg02(aniName) {

    var downup = 0;

    function animation() {
      if (j == 0 && downup == 1) {
        downup = 0;

      } else if (j == t && downup == 0) {
        downup = 1;
      }

      if (downup == 0)
        j++;
      else
        j--;

      $(aniName).find('p').hide().eq(j).show();
      setTimeout(animation, speed);
    };

    var total = $(aniName).find('p').length - 1;

    var j = 0
    var t = total;
    var speed = 150
    animation()

  }

  function aniImg03(aniName) {

    var downup = 0;

    function animation() {
      if (j == 0 && downup == 1) {
        downup = 0;

      } else if (j == t && downup == 0) {
        downup = 1;
      }

      if (downup == 0)
        j++;
      else
        j--;

      $(aniName).find('p').hide().eq(j).show();
      setTimeout(animation, speed);
    };

    var total = $(aniName).find('p').length - 1;

    var j = 0
    var t = total;
    var speed = 120
    animation()

  }

  function aniImg04(aniName) {

    var downup = 0;

    function animation() {
      if (j == 0 && downup == 1) {
        downup = 0;

      } else if (j == t && downup == 0) {
        downup = 1;
      }

      if (downup == 0)
        j++;
      else
        j--;

      $(aniName).find('p').hide().eq(j).show();
      setTimeout(animation, speed);
    };

    var total = $(aniName).find('p').length - 1;

    var j = 0
    var t = total;
    var speed = 110
    animation()

  }

  function aniImg05(aniName) {

    var downup = 0;

    function animation() {
      if (j == 0 && downup == 1) {
        downup = 0;

      } else if (j == t && downup == 0) {
        downup = 1;
      }

      if (downup == 0)
        j++;
      else
        j--;

      $(aniName).find('p').hide().eq(j).show();
      setTimeout(animation, speed);
    };

    var total = $(aniName).find('p').length - 1;

    var j = 0
    var t = total;
    var speed = 140
    animation()

  }

//      function aniImg06(aniName,flag) {
//    var downup = 0;
//
//    function animation() {
//      if (j == 0 && downup == 1) {
//        downup = 0;
//
//      } else if (j == t && downup == 0) {
//        downup = 1;
//      }
//
//      if (downup == 0)
//        j++;
//      else
//        j--;
//
//      $(aniName).find('p').hide().eq(j).show();
//      if(flag){
//        rudolph_play_animation=setTimeout(animation, speed);
//      }
//      else {
//        clearTimeout(rudolph_play_animation);
//      }
//    };
//
//    var total = $(aniName).find('p').length - 1;
//
//    var j = 0;
//    var t = total;
//    var speed = 150;
//    animation();
//
//  }
//
//  function aniImg07(aniName,flag) {
//    var downup = 0;
//
//    function animation() {
//      if (j == 0 && downup == 1) {
//        downup = 0;
//
//      } else if (j == t && downup == 0) {
//        downup = 1;
//      }
//
//      if (downup == 0)
//        j++;
//      else
//        j--;
//
//      $(aniName).find('p').hide().eq(j).show();
//      if(flag)
//        santa_play_animation=setTimeout(animation, speed);
//      else {
//          clearTimeout(santa_play_animation);
//      }
//    };
//
//    var total = $(aniName).find('p').length - 1;
//
//    var j = 0;
//    var t = total;
//    var speed = 150;
//    animation();
//
//  }
//
//  function aniImg08(aniName,flag) {
//    var downup = 0;
//
//    function animation() {
//      if (j == 0 && downup == 1) {
//        downup = 0;
//
//      } else if (j == t && downup == 0) {
//        downup = 1;
//      }
//
//      if (downup == 0)
//        j++;
//      else
//        j--;
//
//      $(aniName).find('p').hide().eq(j).show();
//      if(flag)
//        tree_play_animation=setTimeout(animation, speed);
//      else {
//          clearTimeout(tree_play_animation);
//      }
//    };
//
//    var total = $(aniName).find('p').length - 1;
//
//    var j = 0;
//    var t = total;
//    var speed = 150;
//    animation();
//
//  }
   function aniImg09(aniName){

      var downup=0;
      function animation(){
         if(j == 0&&downup==1){
            downup=0;

         }else if(j==t&&downup==0 ){
            downup=1;
         }

         if(downup==0)
            j++;
         else
            j--;

         $(aniName).find('p').hide().eq(j).show();
         setTimeout(animation, speed);
      };

      var total = $(aniName).find('p').length - 1;

      var j= 0
      var t= total;
      var speed = 240
      animation()

   }
   function aniImg10(aniName){

      var downup=0;
      function animation(){
         if(j == 0&&downup==1){
            downup=0;

         }else if(j==t&&downup==0 ){
            downup=1;
         }

         if(downup==0)
            j++;
         else
            j--;

         $(aniName).find('p').hide().eq(j).show();
         setTimeout(animation, speed);
      };

      var total = $(aniName).find('p').length -1;

      var j= 0
      var t= total;
      var speed = 300
      animation()

   }

    function aniImg11(aniName){

      function animation(){
      if(j==total+1) j=0;
         $(aniName).find('p').hide().eq(j).show();
         setTimeout(animation, speed);
      j++;
      };

      var total = $(aniName).find('p').length -1;

      var j= 0
      var t= total;
      var speed = 400
      animation()

   }
    function aniImg12(aniName){

      function animation(){
      if(j==total+1) j=0;
         $(aniName).find('p').hide().eq(j).show();
         setTimeout(animation, speed);
      j++;
      };

      var total = $(aniName).find('p').length -1;

      var j= 0
      var t= total;
      var speed = 330
      animation()

   }
    aniImg('#banner_hand');
    aniImg02('#rudolph_big');
    aniImg03('#rudolph_small');
    aniImg04('#rudolph_small_1');
    aniImg05('#girl');
    aniImg09('#orgel_musicbox');
    aniImg10('#orgel_back');
    aniImg11('#orgel_snow');
    aniImg12('#light');



  //<----------------빛 반짝임---------------->
  //<--scene03에서 box_star 반짝임-->
  function twinkle() {
    var speed = [1000, 1000];
    for (var i = 0; i < speed.length; i++) {
      $('#scene03 #box_star_2').eq(i).find('img').animate({
        opacity: '0'
      }, speed[i]).animate({
        opacity: '1'
      }, speed[i], function() {
        setTimeout(twinkle, 250);
      });
    }
  }
  twinkle();

  function twinkle01() {
    var speed = [500, 500];
    for (var i = 0; i < speed.length; i++) {
      $('#scene03 #box_star_3').eq(i).find('img').animate({
        opacity: '0'
      }, speed[i]).animate({
        opacity: '1'
      }, speed[i], function() {
        setTimeout(twinkle, 100);
      });
    }
  }
  twinkle01();

  //<----------------scene03에서 tap메뉴---------------->
  $('.tapmenu_01 #tap_btn1').on('click', function() {
    if (tapflag) {
      this.style.background = "url('images/scene03/tapmenu_1_act.png')";
      this.style.zIndex = 999;
      document.getElementById('tap_btn2').style.background = "url('images/scene03/tapmenu_2_noact.png')";
      document.getElementById('tap_btn2').style.zIndex = 950;
      document.getElementById('bookpage').src = "images/scene03/book_01.png";
      document.getElementById('link_btn').style.opacity = "0";
      //      $('#box_cosmetic').find('img').toggle();
      $('.box_all').find('img').toggle();
      $('#insta_typo').find('img').show();
      $('#rudolph_big').find('img').show();
      $('#rudolph_small').find('img').show();
      // 3번씬에서 버튼을 눌렀을때 이미지를 hide -> show상태로 바꾼다.(뒤집는다)
      tapflag = false;
    }
  });

  $('.tapmenu_01 #tap_btn2').on('click', function() {
    if (tapflag == false) {
      this.style.background = "url('images/scene03/tapmenu_2_act.png')";
      this.style.zIndex = 999;
      document.getElementById('tap_btn1').style.background = "url('images/scene03/tapmenu_1_noact.png')";
      document.getElementById('tap_btn1').style.zIndex = 950;
      document.getElementById('bookpage').src = "images/scene03/book_02.png";
      document.getElementById('link_btn').style.opacity = "1";
      $('.box_all').find('img').toggle();
      $('#insta_typo').find('img').hide();
      $('#rudolph_big').find('img').hide();
      $('#rudolph_small').find('img').hide();
      //      $('#box_cosmetic').find('img').toggle();               // 3번씬에서 버튼을 눌렀을때 이미지를 show -> hide상태로 바꾼다.(뒤집는다)
      tapflag = true;
      // 이벤트2 tap 클릭시: 애니메이션 시작
      //  <--scene03에서 book_cosmetic_2--> 클릭시 시작되도록 클릭위치로 옮긴다.
           TweenMax.set("#scene03 #box_cosmetic", {
           y:0,
           visibility: false,
       });
         TweenMax.to("#scene03 #box_cosmetic", 3, {
           y: -180,
           repeat: 0,
           repeatDelay: 0,
           ease: Elastic.easeOut

       }).timeScale(0.8);
    }
  });

////오르골 hover시: 오브젝트 움직임
  $('#scene02 .orgel_click a').mouseenter(function() {
    $(this).find('img').attr("src", "images/scene02/orgel_click_hover.png");

  }).mouseleave(function() {
    $(this).find('img').attr("src", "images/scene02/orgel_click.png");
  });


//scene02 구름 모션
  baloonUp01()

  function baloonUp01() {
    $('#scene02 .cloud_01').animate({
      'margin-left': -20
    }, 2200, null, baloonDown01);
  }

  function baloonDown01() {
    $('#scene02 .cloud_01').animate({
      'margin-left': -40
    }, 2400, null, baloonUp01);
  }

  baloonUp02()

  function baloonUp02() {
    $('#scene02 .cloud_02').animate({
      'margin-left': -20
    }, 2800, null, baloonDown02);
  }

  function baloonDown02() {
    $('#scene02 .cloud_02').animate({
      'margin-left': -40
    }, 2800, null, baloonUp02);
  }

//scene03 구름 모션
  baloonUp03()

  function baloonUp03() {
    $('#scene03 .cloud_03').animate({
      'margin-left': -30
    }, 2500, null, baloonDown03);
  }

  function baloonDown03() {
    $('#scene03 .cloud_03').animate({
      'margin-left': -50
    }, 2600, null, baloonUp03);
  }

//scene04 구름 모션
  baloonUp04()

  function baloonUp04() {
    $('#scene04 .cloud_04').animate({
      'margin-left': -20
    }, 2200, null, baloonDown04);
  }

  function baloonDown04() {
    $('#scene04 .cloud_04').animate({
      'margin-left': -40
    }, 2400, null, baloonUp04);
  }

  baloonUp05()

  function baloonUp05() {
    $('#scene04 .cloud_05').animate({
      'margin-left': -20
    }, 2800, null, baloonDown05);
  }

  function baloonDown05() {
    $('#scene04 .cloud_05').animate({
      'margin-left': -40
    }, 2800, null, baloonUp05);
  }


  var s1 = $('#scene01').width();
  var s2 = $('#scene02').width();
  var s3 = $('#scene03').width();
  var s4 = $('#scene04').width();

  var p1 = $('#scene01').position().left;
  var p2 = $('#scene02').position().left;
  var p3 = $('#scene03').position().left;

  //<----------------Top 메뉴---------------->
  $('#gnb .inner_gnb .gnb01 > a').bind('click', function(e) {
    e.preventDefault();
    var posX = $($(this).attr('href')).position().left;
    var scrollLeft02 = $('.hidden_box').scrollLeft();
    switch_scroll_event = false;

    $('.hidden_box').stop().animate({
      'scrollLeft': posX
    }, 1200, 'easeInOutExpo', function() {
      $(".rudolph_image").attr('src', 'images/common/gnb_1.png');
      switch_scroll_event = true;
    });


    $("#scene02 .top_01").animate({
      marginTop: '-200px'
    }, 600, 'easeInOutCubic');
    $("#scene03 .top_02").animate({
      marginTop: '-200px'
    }, 600, 'easeInOutCubic');
    $("#scene04 .top_03").animate({
      marginTop: '-200px'
    }, 600, 'easeInOutCubic');

  });

  //<------------다음 네비게이션 이동->Top 메뉴 조정------------->
  $('#gnb .inner_gnb .gnb02 > a').bind('click', function(e) {
    e.preventDefault();
    var posX = $($(this).attr('href')).position().left;
    var scrollLeft02 = $('.hidden_box').scrollLeft();
    switch_scroll_event = false;

    $('.hidden_box').stop().animate({
      'scrollLeft': posX
    }, 1200, 'easeInOutExpo', function() {
      $(".rudolph_image").attr('src', 'images/common/gnb_2.png');
      switch_scroll_event = true;
    });

    $("#scene02 .top_01").animate({
      marginTop: '0px'
    }, 1500, 'easeInOutCubic');
    $("#scene03 .top_02").animate({
      marginTop: '-200px'
    }, 600, 'easeInOutCubic');
    $("#scene04 .top_03").animate({
      marginTop: '-200px'
    }, 600, 'easeInOutCubic');
  });

  $('#gnb .inner_gnb .gnb03 > a').bind('click', function(e) {
    e.preventDefault();
    var posX = $($(this).attr('href')).position().left;
    var scrollLeft02 = $('.hidden_box').scrollLeft();
    switch_scroll_event = false;
    $('.hidden_box').stop().animate({
      'scrollLeft': posX
    }, 1200, 'easeInOutExpo', function() {
      $(".rudolph_image").attr('src', 'images/common/gnb_3.png');
      switch_scroll_event = true;
    });

    $("#scene02 .top_01").animate({
      marginTop: '0px'
    }, 600, 'easeInOutCubic');
    $("#scene03 .top_02").animate({
      marginTop: '0px'
    }, 1500, 'easeInOutCubic');
    $("#scene04 .top_03").animate({
      marginTop: '-200px'
    }, 600, 'easeInOutCubic');
  });

  $('#gnb .inner_gnb .gnb04 > a').bind('click', function(e) {
    e.preventDefault();
    var posX = $($(this).attr('href')).position().left;
    var scrollLeft02 = $('.hidden_box').scrollLeft();
    switch_scroll_event = false;
    $('.hidden_box').stop().animate({
      'scrollLeft': posX
    }, 1200, 'easeInOutExpo', function() {
      $(".rudolph_image").attr('src', 'images/common/gnb_4.png');
      switch_scroll_event = true;
    });
    $("#scene02 .top_01").animate({
      marginTop: '0px'
    }, 600, 'easeInOutCubic');
    $("#scene03 .top_02").animate({
      marginTop: '0px'
    }, 600, 'easeInOutCubic');
    $("#scene04 .top_03").animate({
      marginTop: '0px'
    }, 1500, 'easeInOutCubic');
  });


  var scrollLeft = 0;
  var postscrollLeft = 0; //이전위치와 현재위치의 차이의 비율만큼 이동하는 방식으로 수행
  $('.hidden_box').scroll(function() {
    $('.hidden_box').getNiceScroll().resize();

    var scrollLeft = $('.hidden_box').scrollLeft();
    var scm_l = 1920 / 3 * 2;
    var scm_r = 1920 / 3;
    var scm_c = 1920/4;
    $('.rudolph').stop().css({
      'margin-left': ((scrollLeft) * 0.12 - (scrollLeft) / 1920 * 3)
    });

    if (scrollLeft < 1920 - scm_r) {
      $(".rudolph_image").attr('src', 'images/common/gnb_1.png');
    } else if (scrollLeft > 1920 - scm_l && scrollLeft < 1920 * 2 - scm_r) {
      $(".rudolph_image").attr('src', 'images/common/gnb_2.png');
    } else if (scrollLeft > 1920 * 2 - scm_l && scrollLeft < 1920 * 3 - scm_r) {
      $(".rudolph_image").attr('src', 'images/common/gnb_3.png');
    } else if (scrollLeft > 1920 * 3 - scm_l && scrollLeft < 1920 * 4) {
      $(".rudolph_image").attr('src', 'images/common/gnb_4.png');
    }


     //스크롤하면 상단 TOP 내려오도록//
    if (scrollLeft>1920-scm_c && scrollLeft<1920){
      if(switch_scroll_event){

        var marginTop1 = parseFloat($("#scene02 .top_01").css("marginTop"));
        var point = marginTop1+(scrollLeft-postscrollLeft)/2.5;
        if(point>0) point= 0;
        if(point<-200) point = -200;
        $("#scene02 .top_01").css("marginTop",point);

      }

    }
    if (scrollLeft>1920*2-scm_c && scrollLeft<1920*2){
      if(switch_scroll_event){
        var marginTop2 = parseFloat($("#scene03 .top_02").css("marginTop"));
        var point2 = marginTop2+(scrollLeft-postscrollLeft)/2.5;
        if(point2>0) point2= 0;
        if(point2<-200) point2 = -200;
        $("#scene03 .top_02").css("marginTop",point2);
      }

    }
    if (scrollLeft>1920*3-scm_c && scrollLeft<1920*3){
      if(switch_scroll_event){
        var marginTop3 = parseFloat($("#scene04 .top_03").css("marginTop"));
        var point3 = marginTop3+(scrollLeft-postscrollLeft)/2.5;
        if(point3>0) point3= 0;
        if(point3<-200) point3 = -200;
        $("#scene04 .top_03").css("marginTop",point3);
      }


    }
    postscrollLeft = scrollLeft;
  });

//slide -> 기존방식
//fade -> opacity 연해졌다 진해졌다 하는 방식
  //<----scene04 slide.js---->
  $('.book_detail').slidesjs({
    play: {
      active: false, // play/stop 버튼 활성화 , true=활성화, false=비활성화
      interval: 4500, // 대기시간, 1000=1초,
      effect: "fade", // 효과, slide/fade
      auto: true, // 자동시작
      pauseOnHover: true, // 마우스 오버시 멈춤
      restartDelay: 2500 // 마우스 아웃시 재동작 시간
    },
    navigation: { // 이전/다음 버튼
      active: true, // 버튼 활성화/비활성화
      effect: "fade"
    },
    pagination: { // 페이지네이션, 현재 선택된 슬라이드표시, 전체 갯수 표시
      active: true,
      effect: "fade"
    },
    effect: { // 효과 옵션
      fade: {
        speed: 1000
      },
      slide: {
        speed: 1600
      }
    }
  });

});
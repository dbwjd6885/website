//<--fullpage ,gnb_rudolph 이동, 상단판자 이벤트-->

var page = 0;  //페이지인덱스(페이지첫인덱스가0이다)
var sceneNum01=true;
var tapflag=false;
$(function(){
  $('#fullpage').fullpage({
      anchors:['MainPage'],
      controlArrows: false,
      scrollHorizontally: false
  });


 
//<--scene3에서 tap메뉴 start-->
$.fn.fullpage.setKeyboardScrolling(false); 
  $('.tapmenu_01 #tap_btn1').on('click',function(){
    if(tapflag){
      this.style.background="url('images/scene03/tapmenu_1_act.png')";
      this.style.zIndex=999;
       document.getElementById('tap_btn2').style.background="url('images/scene03/tapmenu_2_noact.png')";
       document.getElementById('tap_btn2').style.zIndex=950;
       document.getElementById('bookpage').src="images/scene03/book_01.png";
       document.getElementById('link_btn').style.opacity="0";

      tapflag = false;
    }
  });
  $('.tapmenu_01 #tap_btn2').on('click',function(){
    if(tapflag==false){
       this.style.background="url('images/scene03/tapmenu_2_act.png')";
       this.style.zIndex=999;
        document.getElementById('tap_btn1').style.background="url('images/scene03/tapmenu_1_noact.png')";
       document.getElementById('tap_btn1').style.zIndex=950;
        document.getElementById('bookpage').src="images/scene03/book_02.png";
        document.getElementById('link_btn').style.opacity="1";

       tapflag = true;
    }
  });
 //<--scene3에서 tap메뉴 end-->

    var movepage= function(num){    //movepage라는 함수구현
        $.fn.fullpage.moveTo('MainPage', num); //fullpage에있는함수로 페이지인덱스에 맞는 페이지로 이동시켜줌
        if(num == 0){   //각각의 페이지인덱스에 맞게 루돌프썰매이미지 변환 및 이동
            $( ".rudolph" ).animate({
    marginLeft: "-750"

       }, 500);
        $( ".rudolph_image" ).attr('src', 'images/common/gnb_1.png');
        }else if(num ==1){
              $( ".rudolph" ).animate({marginLeft: "-526" }, 500);
        $( ".rudolph_image" ).attr('src', 'images/common/gnb_2.png');
        }else if(num ==2){
                        $( ".rudolph" ).animate({
    marginLeft: "-302"

       }, 500);
        $( ".rudolph_image" ).attr('src', 'images/common/gnb_3.png');
        }else if(num ==3){
                        $( ".rudolph" ).animate({
    marginLeft: "-78"

       }, 500);
        $( ".rudolph_image" ).attr('src', 'images/common/gnb_4.png');
        }

    };
    $(document).ready(function(){

//    baloonUp01()
//    function baloonUp01(){$('#scene01 .cloud_01').animate({'margin-left':-60}, 1000, null, baloonDown01);}
//    function baloonDown01(){$('#scene01 .cloud_01').animate({'margin-left':-80}, 700, null, baloonUp01);}

    baloonUp02()
    function baloonUp02(){$('#scene02 .cloud_02').animate({'margin-left':-60}, 1000, null, baloonDown02);}
    function baloonDown02(){$('#scene02 .cloud_02').animate({'margin-left':-80}, 700, null, baloonUp02);}

    baloonUp03()
    function baloonUp03(){$('#scene03 .cloud_03').animate({'margin-left':-60}, 1000, null, baloonDown03);}
    function baloonDown03(){$('#scene03 .cloud_03').animate({'margin-left':-80}, 700, null, baloonUp03);}

    baloonUp04()
    function baloonUp04(){$('#scene04 .cloud_04').animate({'margin-left':-60}, 1000, null, baloonDown04);}
    function baloonDown04(){$('#scene04 .cloud_04').animate({'margin-left':-80}, 700, null, baloonUp04);}
        
});

    $('#gnb .inner_gnb .gnb01 > a').bind('click',function(e){
		e.preventDefault();
        $.fn.fullpage.moveTo('MainPage', 0);
        $( ".rudolph" ).animate({
    marginLeft: "-750"

       }, 1000, function() {
    // Animation complete.
       });
        $( ".rudolph_image" ).attr('src', 'images/common/gnb_1.png');
        page=0;

        $("#scene02 .top_01").animate({marginTop:'-600px'}, 400, 'easeInOutCubic');
	});

    $('#gnb .inner_gnb .gnb02 > a').bind('click',function(e){
            e.preventDefault();
        $.fn.fullpage.moveTo('MainPage', 1);

       $( ".rudolph" ).animate({
    marginLeft: "-526"

       }, 1000, function() {
    // Animation complete.
       });
          $( ".rudolph_image" ).attr('src', 'images/common/gnb_2.png');
            page=1;
            //<----상단 판자 이벤트 효과---->
        $("#scene02 .top_01").animate({marginTop:'0px'}, 600, 'easeInOutCubic');
        $("#scene03 .top_02").animate({marginTop:'-600px'}, 400, 'easeInOutCubic');

        });
    $('#gnb .inner_gnb .gnb03 > a').bind('click',function(e){
            e.preventDefault();
             $.fn.fullpage.moveTo('MainPage', 2);
        $( ".rudolph" ).animate({
    marginLeft: "-302"

       }, 1000, function() {
    // Animation complete.
       });
        $( ".rudolph_image" ).attr('src', 'images/common/gnb_3.png');
            page=2;

        $("#scene02 .top_01").animate({marginTop:'-600px'}, 00, 'easeInOutCubic');
        $("#scene03 .top_02").animate({marginTop:'0px'}, 600, 'easeInOutCubic');
        $("#scene04 .top_03").animate({marginTop:'-600px'}, 400, 'easeInOutCubic');
        });
    $('#gnb .inner_gnb .gnb04 > a').bind('click',function(e){
            e.preventDefault();

        $.fn.fullpage.moveTo('MainPage', 3);
        $( ".rudolph" ).animate({
    marginLeft: "-78"

       }, 1000, function() {
    // Animation complete.
       });
        $( ".rudolph_image" ).attr('src', 'images/common/gnb_4.png');
        page=3;

        $("#scene02 .top_01").animate({marginTop:'-600px'}, 600, 'easeInOutCubic');
        $("#scene03 .top_02").animate({marginTop:'-600px'}, 00, 'easeInOutCubic');
        $("#scene04 .top_03").animate({marginTop:'0px'}, 600, 'easeInOutCubic');
        });
//<----scene04 slidejs---->
    $('.book_detail').slidesjs({
                        play: {
                          active: false, // play/stop 버튼 활성화 , true=활성화, false=비활성화
                          interval: 4500, // 대기시간, 1000=1초,
                          effect: "slide", // 효과, slide/fade
                          auto: true, // 자동시작
                          pauseOnHover: true, // 마우스 오버시 멈춤
                          restartDelay: 2500 // 마우스 아웃시 재동작 시간
                        },
                        navigation: {// 이전/다음 버튼
                          active: true, // 버튼 활성화/비활성화
                          effect: "slide"
                        },
                        pagination: {// 페이지네이션, 현재 선택된 슬라이드표시, 전체 갯수 표시
                          active: true,
                          effect: "slide"
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

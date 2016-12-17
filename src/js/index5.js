

//框架
    var pageContain = document.getElementById('pageContain');
    var winWidth = document.body.clientWidth || document.documentElement.clientWidth;
    // var imgAct = {
    //     "page1":{
    //         "one_gz_a":move(".one_gz").delay(1500).set("bottom","-1163px").duration(500),
    //         "one_gz_b":move(".one_gz").delay(2000).set("bottom","0").duration(500),
    //         "one_flag_a":move(".one_flag").delay(2000).set("opacity","0").duration(500),
    //         "one_flag_b":move(".one_flag").delay(2500).set("opacity","1").duration(500),
    //         "one_text_a":move(".one_text").delay(3000).set("opacity","0").scale(10).duration(500),
    //         "one_text_b":move(".one_text").delay(3500).set("opacity","1").scale(1).duration(500),
    //         "one_moon_a":move(".one_moon").delay(2500).set("top","-120px").duration(500),
    //         "one_moon_b":move(".one_moon").delay(3000).set("top","0").duration(500)
    //     },
    //     "page2":{
    //         "two_zijin":move(".two_zijin").delay("0.5s").x(-860).ease('out').duration(1700),
    //         "two_bz":move(".two_bz").delay("0.5s").x(790).ease('out').duration(1700),
    //         "two_gg":move(".two_gg").delay("0.5s").x(-855).ease('out').duration(1700),
    //         "two_pz":move(".two_pz").delay("0.5s").x(790).ease('out').duration(1700),
    //         "two_gj":move(".two_gj").delay("0.5s").x(-855).ease('out').duration(1700)
    //     },
    //     "page4":{
    //         "four_bg":move(".four_bg").y(1300).ease("in").duration(600),
    //         "four_net":move(".four_net").set('opacity',1).y(300).ease("in").delay("1s").duration(500)
    //     },
    //     "page5":{
    //         "five_bg":move(".five_bg").y(1300).ease("in").duration(500),
    //         "five_bg2":move(".five_bg2").y(1300).ease("in").duration(800).delay("0.5s")
    //     }
    // };
    // var fnAct1 = function(){
    //     imgAct.page1.one_gz_a.end();
    //     imgAct.page1.one_gz_b.end();
    //     imgAct.page1.one_flag_a.end();
    //     imgAct.page1.one_flag_b.end();
    //     imgAct.page1.one_moon_a.end();
    //     imgAct.page1.one_moon_b.end();
    //     imgAct.page1.one_text_a.end();
    //     imgAct.page1.one_text_b.end();
    // };
    // var fnAct2 = function(){
    //     imgAct.page2.two_zijin.end();
    //     imgAct.page2.two_bz.end();
    //     imgAct.page2.two_gg.end();
    //     imgAct.page2.two_pz.end();
    //     imgAct.page2.two_gj.end();
    // };
    // var fnAct4 = function(){
    //     imgAct.page4.four_bg.end();
    //     imgAct.page4.four_net.end();
    // };
    // var fnAct5 = function(){
    //     imgAct.page5.five_bg.end();
    //     imgAct.page5.five_bg2.end();
    // };
    var ready = function() {
        var loading = document.getElementById('loading');
        loading.style.opacity = 0;
        pageContain.className = '';
        loading.parentNode.removeChild(loading);
        ready = function() {};
        // fnAct1();
    }
    window.onload = window.onresize = function(){
        winWidth = document.body.clientWidth || document.documentElement.clientWidth;
        pageResponse({
            template:2,
            selectors : '.page > div',     //模块选择器，使用querySelectorAll的方法
            mode :'contain',     // auto || contain || cover ，默认模式为auto
            width : '1080',      //输入页面的宽度，只支持输入数值，默认宽度为320px
            height : '1920'      //输入页面的高度，只支持输入数值，默认高度为504px
        });
        setTimeout(function(){
            ready();
        },800);

    };
    // function addClass(obj, sClass){
    //     var re = new RegExp('\\b'+sClass+'\\b');
    //     if(re.test(obj.className) == false){
    //         //如果没有才加
    //         if(obj.className){
    //             obj.className += ' '+sClass;
    //         }else{
    //             obj.className = sClass;
    //         }
    //     }
    // };
    // function removeClass(obj, sClass){
    //     var re = new RegExp('\\b'+sClass+'\\b','g');
    //     if(re.test(obj.className)){
    //         //match 对字符串执行查找，并将宝航查找的结果作为数组返回
    //         //\S 匹配任何非空白字符。等价于 [^ \f\n\r\t\v]。
    //         var arr = obj.className.replace(re,'').match(/\S+/g);
    //         if(arr){
    //             obj.className = arr.join(' ');
    //         }else{
    //             obj.className = '';
    //         };
    //     }else{
    //         return;
    //     }
    // };
    // var one_top = document.querySelector(".one_top");
    // var one_house = document.querySelector(".one_house");
    // var two_ad = document.querySelector(".two_ad");
    // var three_ad = document.querySelector(".three_ad");
    // var three_1 = document.querySelector(".three_1");
    // var three_2 = document.querySelector(".three_2");
    // var three_3 = document.querySelector(".three_3");
    // var three_4 = document.querySelector(".three_4");
    // var three_bg = document.querySelector(".three_bg");
    // var four_1 = document.querySelector(".four_1");
    // var four_2 = document.querySelector(".four_2");
    // var four_3 = document.querySelector(".four_3");
    // var four_4 = document.querySelector(".four_4");
    // var five_ad = document.querySelector(".five_ad");
    // var five_zi = document.querySelector(".five_zi");

    var runPage = new FullPage({
        id : 'pageContain',                            // id of contain
        slideTime : 800,                               // time of slide
        effect : {                                     // slide effect
            transform : {
                translate : 'Y',                       // 'X'|'Y'|'XY'|'none'
                scale : [1, 1],                    // [scalefrom, scaleto]
                rotate : [0, 0]                    // [rotatefrom, rotateto]
            },
            opacity : [1, 1]                           // [opacityfrom, opacityto]
        },
        mode : 'wheel,touch',               // mode of fullpage
        easing : 'ease',                              // easing('ease','ease-in','ease-in-out' or use cubic-bezier like [.33, 1.81, 1, 1] )
        continuous : false,
        beforeChange:function(index,thisPage){
            // switch(index){
            //     case 0:  if(thisPage.dataset.load=="false"){
            //         // removeClass(one_top,"one_top_act");
            //         // addClass(one_top,"one_top_end");
            //         // removeClass(one_house,"one_house_a");
            //         // addClass(one_house,"one_house_end");
            //     } break;
            //     case 1:  if(thisPage.dataset.load=="true"){
            //         removeClass(two_ad,"two_ad_act");
            //     } break;
            //     case 2:  if(thisPage.dataset.load=="true"){
            //         removeClass(three_ad,"three_ad_act");
            //         removeClass(three_1,"three_1_a");
            //         removeClass(three_2,"three_1_b");
            //         removeClass(three_3,"three_1_c");
            //         removeClass(three_4,"three_1_d");
            //     } break;
            //     case 3:  if(thisPage.dataset.load=="true"){
            //         removeClass(four_1,"four_1_a");
            //         removeClass(four_2,"four_1_b");
            //         removeClass(four_3,"four_1_c");
            //         removeClass(four_4,"four_1_d");
            //     } break;
            //     case 4:  if(thisPage.dataset.load=="true"){
            //         removeClass(five_ad,"five_ad_act");
            //         removeClass(five_zi,"five_zi_a");
            //         addClass(five_zi,"five_zi_end");
            //         document.querySelector(".five_zi").style.opacity=1;
            //     } break;
            // }
        },
        callback : function(index, thisPage) {       // callback when pageChange
            thisPage.dataset.load = true;
//            $(thisPage).attr("data-load","true");
            //console.log(index); //页数 0 1 2 3 4 
            // if(index==1){
            //     fnAct2();
            // }else if(index==3){
            //     setTimeout(function(){
            //         fnAct4();
            //     },1400);
            // }else if(index==4){
            //     setTimeout(function(){
            //         fnAct5();
            //     },1000);
            // }
        }
    });
 //uc浏览器有问题 so只能用Js
    if(navigator.userAgent.indexOf('UCBrowser') > -1) {
        var  ww = window.screen.width;
        // document.querySelector('.one2_car').style.marginTop="768px";
        // document.querySelector('.one2_car').style.marginLeft="250px";
        // document.querySelector('.one2_car').style.zIndex=2;
      
    }


    $('.four_teal, .four_tear').one('webkitAnimationStart mozAnimationStart MSAnimationStart oanimationstart animationstart',function (i){
        $(this).css('opacity',1);
    })

    $('.msg_brand').on('click',function (){
        var index = $(this).index('.msg_brand');
        $('.show_msg').hide().eq(index).show();
    });
    $('.close').on('click',function (){
        $(this).parent('.show_msg').hide();
    });

$('.enter').on('click',function (){
    $(this).siblings('.show_msg').show();
});

// var AnimateObj = document.querySelectorAll('.animate_obj'); 
$('.animate_obj').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function (i){
    $(this).removeClass('animated');
    if($(this).hasClass('five_money'))
    {
        $(this).removeClass('fadeIn').addClass('animated bounce').css({
            'animation-duration': '2s',
            'animation-delay':'0s',
            'animation-iteration-count':'infinite'
        });
    }

     if($(this).hasClass('gesture'))
    {
        $(this).removeClass('fadeIn').addClass('animated bounce').css({
            'animation-duration': '2.5s',
            'animation-delay':'0s',
            'animation-iteration-count':'infinite'
        });
    }
    if($(this).hasClass('six_zgfw'))
    {
        $(this).removeClass('fadeIn').addClass('animated bounce').css({
            'animation-duration': '3s',
            'animation-delay':'0s',
            'animation-iteration-count':'infinite'
        });
    }
    if($(this).hasClass('seven_gzly'))
    {
        $(this).removeClass('fadeIn').addClass('animated bounce').css({
            'animation-duration': '3s',
            'animation-delay':'0s',
            'animation-iteration-count':'infinite'
        });
    }
    if($(this).hasClass('seven_gzbz'))
    {
        $(this).removeClass('fadeIn').addClass('animated bounce').css({
            'animation-duration': '3s',
            'animation-delay':'0s',
            'animation-iteration-count':'infinite'
        });
    }

    if($(this).hasClass('eight_gzky'))
    {
        $(this).removeClass('fadeIn').addClass('animated bounce').css({
            'animation-duration': '3s',
            'animation-delay':'0s',
            'animation-iteration-count':'infinite'
        });
    }
    if($(this).hasClass('eight_gzyx'))
    {
        $(this).removeClass('fadeIn').addClass('animated bounce').css({
            'animation-duration': '3s',
            'animation-delay':'0s',
            'animation-iteration-count':'infinite'
        });
    }
    if($(this).hasClass('nine_gzgs'))
    {
        $(this).removeClass('fadeIn').addClass('animated bounce').css({
            'animation-duration': '3s',
            'animation-delay':'0s',
            'animation-iteration-count':'infinite'
        });
    }
    if($(this).hasClass('nine_tea'))
    {
         $(this).removeClass('zoomIn').addClass('animated pulse').css({
           '-webkit-animation':'tea 2s 0s infinite linear alternate'
        });
    }
    if($(this).hasClass('nine_tea2'))
    {
        $(this).removeClass('zoomIn').addClass('animated pulse').css({
           '-webkit-animation':'tea 2s 0s infinite linear alternate'
        });
    }
    if($(this).hasClass('nine_page'))
    {
        $(this).removeClass('zoomIn').addClass('animated pulse').css({
           '-webkit-animation':'tea 2s 1s infinite linear alternate'
        });
    }
    if($(this).hasClass('nine_seal'))
    {
        $(this).removeClass('zoomIn').addClass('animated swing').css({
            'animation-duration': '6s',
            'animation-delay':'0s',
            'animation-iteration-count':'infinite'
        });
    }
    if($(this).hasClass('nine_gzry'))
    {
        $(this).removeClass('fadeIn').addClass('animated bounce').css({
            'animation-duration': '3s',
            'animation-delay':'0s',
            'animation-iteration-count':'infinite'
        });
    }
    if($(this).hasClass('nine_stars'))
    {
        $(this).removeClass('fadeIn').addClass('animated flash').css({
            'animation-duration': '4s',
            'animation-delay':'0s',
            'animation-iteration-count':'infinite'
        });
    }
    if($(this).hasClass('nine_stars2'))
    {
        $(this).removeClass('fadeIn').addClass('animated flash').css({
            'animation-duration': '4s',
            'animation-delay':'0.5s',
            'animation-iteration-count':'infinite'
        });
    }
    if($(this).hasClass('nine_stars3'))
    {
        $(this).removeClass('fadeIn').addClass('animated flash').css({
            'animation-duration': '4s',
            'animation-delay':'0.3s',
            'animation-iteration-count':'infinite'
        });
    }
    if($(this).hasClass('ten_gzts'))
    {
        $(this).removeClass('fadeIn').addClass('animated bounce').css({
            'animation-duration': '3s',
            'animation-delay':'0s',
            'animation-iteration-count':'infinite'
        });
    }

    if($(this).hasClass('move_act')){
        $(this).removeClass('move_act').addClass('end_act');
    }
    
});



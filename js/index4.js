function addClass(e,t){var o=new RegExp("\\b"+t+"\\b");0==o.test(e.className)&&(e.className?e.className+=" "+t:e.className=t)}function removeClass(e,t){var o=new RegExp("\\b"+t+"\\b","g");if(o.test(e.className)){var a=e.className.replace(o,"").match(/\S+/g);a?e.className=a.join(" "):e.className=""}}var pageContain=document.getElementById("pageContain"),winWidth=document.body.clientWidth||document.documentElement.clientWidth,imgAct={page1:{one_gz_a:move(".one_gz").delay(1500).set("bottom","-1163px").duration(500),one_gz_b:move(".one_gz").delay(2e3).set("bottom","0").duration(500),one_flag_a:move(".one_flag").delay(2e3).set("opacity","0").duration(500),one_flag_b:move(".one_flag").delay(2500).set("opacity","1").duration(500),one_text_a:move(".one_text").delay(3e3).set("opacity","0").scale(10).duration(500),one_text_b:move(".one_text").delay(3500).set("opacity","1").scale(1).duration(500),one_moon_a:move(".one_moon").delay(2500).set("top","-120px").duration(500),one_moon_b:move(".one_moon").delay(3e3).set("top","0").duration(500)},page2:{two_zijin:move(".two_zijin").delay("0.5s").x(-860).ease("out").duration(1700),two_bz:move(".two_bz").delay("0.5s").x(790).ease("out").duration(1700),two_gg:move(".two_gg").delay("0.5s").x(-855).ease("out").duration(1700),two_pz:move(".two_pz").delay("0.5s").x(790).ease("out").duration(1700),two_gj:move(".two_gj").delay("0.5s").x(-855).ease("out").duration(1700)},page4:{four_bg:move(".four_bg").y(1300).ease("in").duration(600),four_net:move(".four_net").set("opacity",1).y(300).ease("in").delay("1s").duration(500)},page5:{five_bg:move(".five_bg").y(1300).ease("in").duration(500),five_bg2:move(".five_bg2").y(1300).ease("in").duration(800).delay("0.5s")}},fnAct1=function(){imgAct.page1.one_gz_a.end(),imgAct.page1.one_gz_b.end(),imgAct.page1.one_flag_a.end(),imgAct.page1.one_flag_b.end(),imgAct.page1.one_moon_a.end(),imgAct.page1.one_moon_b.end(),imgAct.page1.one_text_a.end(),imgAct.page1.one_text_b.end()},fnAct2=function(){imgAct.page2.two_zijin.end(),imgAct.page2.two_bz.end(),imgAct.page2.two_gg.end(),imgAct.page2.two_pz.end(),imgAct.page2.two_gj.end()},fnAct4=function(){imgAct.page4.four_bg.end(),imgAct.page4.four_net.end()},fnAct5=function(){imgAct.page5.five_bg.end(),imgAct.page5.five_bg2.end()},ready=function(){var e=document.getElementById("loading");e.style.opacity=0,pageContain.className="",e.parentNode.removeChild(e),ready=function(){},fnAct1()};window.onload=window.onresize=function(){winWidth=document.body.clientWidth||document.documentElement.clientWidth,pageResponse({template:2,selectors:".page > div",mode:"contain",width:"1080",height:"1920"}),setTimeout(function(){ready()},800)};var one_top=document.querySelector(".one_top"),two_ad=document.querySelector(".two_ad"),three_ad=document.querySelector(".three_ad"),three_1=document.querySelector(".three_1"),three_2=document.querySelector(".three_2"),three_3=document.querySelector(".three_3"),three_4=document.querySelector(".three_4"),three_bg=document.querySelector(".three_bg"),four_1=document.querySelector(".four_1"),four_2=document.querySelector(".four_2"),four_3=document.querySelector(".four_3"),four_4=document.querySelector(".four_4"),five_ad=document.querySelector(".five_ad"),five_zi=document.querySelector(".five_zi"),runPage=new FullPage({id:"pageContain",slideTime:800,effect:{transform:{translate:"Y",scale:[1,1],rotate:[0,0]},opacity:[1,1]},mode:"wheel,touch",easing:"ease",continuous:!1,beforeChange:function(e,t){switch(e){case 0:"false"==t.dataset.load&&(removeClass(one_top,"one_top_act"),addClass(one_top,"one_top_end"));break;case 1:"true"==t.dataset.load&&removeClass(two_ad,"two_ad_act");break;case 2:"true"==t.dataset.load&&(removeClass(three_ad,"three_ad_act"),removeClass(three_1,"three_1_a"),removeClass(three_2,"three_1_b"),removeClass(three_3,"three_1_c"),removeClass(three_4,"three_1_d"));break;case 3:"true"==t.dataset.load&&(removeClass(four_1,"four_1_a"),removeClass(four_2,"four_1_b"),removeClass(four_3,"four_1_c"),removeClass(four_4,"four_1_d"));break;case 4:"true"==t.dataset.load&&(removeClass(five_ad,"five_ad_act"),removeClass(five_zi,"five_zi_a"),addClass(five_zi,"five_zi_end"),document.querySelector(".five_zi").style.opacity=1)}},callback:function(e,t){t.dataset.load=!0,console.log(e),1==e?fnAct2():3==e?setTimeout(function(){fnAct4()},1400):4==e&&setTimeout(function(){fnAct5()},1e3)}});if(navigator.userAgent.indexOf("UCBrowser")>-1)var ww=window.screen.width;
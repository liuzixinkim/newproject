

window.onload = window.onresize = function(){

    pageResponse({
        selectors : '.pageContainer',     //模块选择器，使用querySelectorAll的方法
        mode : 'contain',     // auto || contain || cover ，默认模式为auto 
        width : '1080',      //输入页面的宽度，只支持输入数值，默认宽度为320px
        height : '1920'      //输入页面的高度，只支持输入数值，默认高度为504px
    });


}

var mySwiper = new Swiper ('.swiper-container', {
	onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
		swiperAnimateCache(swiper); //隐藏动画元素 
		swiperAnimate(swiper); //初始化完成开始动画
	}, 
	onSlideChangeEnd: function(swiper){ 
		swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
	} 
});
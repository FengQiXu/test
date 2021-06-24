/**
 * 每个轮播div结构 <div class="box"></div>
 * 小点格式:
 * <ul class="number">
		<li class="active"></li>
		<li></li>
		<li></li>
	</ul>
	左右按钮
	<div class="btn left">&lt;</div>
	<div class="btn right">&gt;</div>
 * 
 * 
 * 
 * 轮播插件
 * @param  ele  	最外面的banner选择器
 * @param  speed	每次轮播的切换速度
 * @param  interval	 多久切换一次
 * 
 * 
 */
function lunbo(ele,speed,interval){
	var i=0;
	$(ele).css({'position':'relative','overflow':'hidden'});
	$(ele+' .box').wrapAll('<div class="liner"></div>');
	$(ele+' .liner').css({'width':'30000px','position':'absolute','left':0,'top':0});
	$(ele+' .liner .box').css('float','left');
	$(ele+' .liner').append($(ele+' .liner .box:first').clone());
	var num  = $(ele+' .liner .box').size();
	var width = $(ele+' .box').width();
	
//往左移动
function moveLeft(){
	i++;
	if(i==num){
		$(ele+' .liner').css({'left':0});
		i=1;
	}
	if(i==num-1){
		$(ele+' ul.number li').eq(0).addClass('active').siblings().removeClass('active');
	}else{
		$(ele+' ul.number li').eq(i).addClass('active').siblings().removeClass('active');
	}
	$(ele+' .liner').animate({'left':-width*i+'px'},speed);
}
//往右移动
function moveRight(){
	i--;
	if(i==-1){
		$(ele+' .liner').css({'left':-(num-1)*width+'px'});
		i=num-2;
	}
	$(ele+' .liner').animate({'left':-width*i+'px'},speed);
	$(ele+' ul.number li').eq(i).addClass('active').siblings().removeClass('active');
}
//自动轮播
var t = setInterval(moveLeft,interval);

//点击右按钮
$(ele+' .btn.right').click(function(){
	if(!$(ele+' .liner').is(':animated')){
		moveLeft();
	}
});
//点击左按钮
$(ele+' .btn.left').click(function(){
	if(!$(ele+' .liner').is(':animated')){
		moveRight();
	}
});
//小点指向
$(ele+' ul.number li').hover(function(){
	$(ele+' .liner').stop();
	i  = $(this).index(ele+' ul.number li');
	$(ele+' .liner').animate({'left':-width*i+'px'},speed);
	$(ele+' ul.number li').eq(i).addClass('active').siblings().removeClass('active');
});
//停止放开自动轮播
$(ele).hover(function(){
	//清除定时器:
	clearInterval(t);
},function(){
	//生成定时器:
		 t = setInterval(moveLeft,interval);
	});
}
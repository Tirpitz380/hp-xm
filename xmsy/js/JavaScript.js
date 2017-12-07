$(function(){
	$(".shop1").mouseenter(function(){
		$(".shop2").show(200);
	}).parent("div").mouseleave(function(){
		$(".shop2").hide(200);
	});
	$(".search>a").mouseenter(function(){
		$(".search>a p").animate({left:0},200);
	}).mouseleave(function(){
		$(".search>a p").animate({left:-49},200);
	});
	$(".search1 input").click(function(){
		document.querySelector(".search1").style.borderColor="#FF6700";
		document.querySelector(".search2").style.borderColor="#FF6700";
		$(".search1 ul").show(500);
		$(".search1 a").fadeOut(500);
	}).blur(function(){
		$(".search1 ul").hide(500);
		$(".search1 a").fadeIn(500);
	});
	$.each($(".search>ul>li"), function() {
		var i=$(this).index();
		if(i>0 && i<8){
			$(".search>ul>li").eq(i).mouseenter(function(){
				$(".xq1").eq(i-1).fadeIn(250).siblings(".xq1").fadeOut(250);
			}).mouseleave(function(){
				$(".xq1").eq(i-1).fadeOut(0);
				$(".xq1").eq(i-1).mouseenter(function(){
		$(".xq1").eq(i-1).fadeIn(0);
				}).mouseleave(function(){
					$(".xq1").eq(i-1).fadeOut(0);
				})
			})
		}
	});
	var i=0;
	var timer=null;
	$('.btn_l').click(function(){
		clearInterval(timer);
		if(i==0){i=4;}else{i--;}
		lbs(i);
	});
	$('.btn_r').click(function(){
		clearInterval(timer);
		if(i==4){i=0;}else{i++;}
		lbs(i);
	});
	$('.btn_lis').children().click(function(){
		clearInterval(timer);
		var index=$(this).index();
		i=index;
		lbs(i);
	});
	function lbs(s){
		$('.lbk').children().eq(s).fadeIn(400).siblings('li').fadeOut(400);
		$('.btn_lis').children().eq(s).addClass('btn_ls').siblings('li').removeClass('btn_ls');
	}
	timer=setInterval(lb,3000);
	function lb(){
		i++;
		if(i==5){
			i=0;
		}
		lbs(i);
	}
	$('.lbk').mouseenter(function(){
		clearInterval(timer);
	});
	$('.lbk').mouseleave(function(){
		timer=setInterval(lb,3000);
	});
	$('.xdh').children().children().each(function(index){
		$('.xdh').children().children().eq(index).mouseenter(function(){
			$('.xdh').css("background","url(img/xiaodh/img"+(index+1)+".png)")
		})
	});
	$('.xdh').children().children().mouseleave(function(){
		$('.xdh').css('background','url(img/xiaodh/image1.png)');
	});
	var xp_tm=null;
	xp_tm=setInterval(dpgd,4000);
	function dpgd(){
		var l=parseInt($('.mxdp ul').css('left'));
		if(l==0){
			$('.mxdp ul').animate({left:-1240},700);
			$('.title_l').css('color','#B0B1BD');
			$('.title_r').css('color','#E0E0E0');
			
		}else{
			$('.mxdp ul').animate({left:0},700);
			$('.title_l').css('color','#E0E0E0');
			$('.title_r').css('color','#B0B1BD');
		}
			
	}
	$('.title_l').click(function(){
		var l=parseInt($('.mxdp ul').css('left'));
		if(l==-1240){
			$('.mxdp ul').animate({left:0},700);
			$('.title_l').css('color','#E0E0E0');
			$('.title_r').css('color','#B0B1BD');
		}
	});
	$('.title_r').click(function(){
		var l=parseInt($('.mxdp ul').css('left'));
		if(l==0){
			$('.mxdp ul').animate({left:-1240},700);
			$('.title_l').css('color','#B0B1BD');
			$('.title_r').css('color','#E0E0E0');
		}
	});
	
	$('.tj_l').click(function(){
		var l=parseInt($('.wntj').css('left'));
		if(l==-1240){
			$('.wntj').animate({left:0},400);
			$('.tj_l').css('color','#E0E0E0');
			$('.tj_r').css('color','#B0B1BD');
		}
	});
	$('.tj_r').click(function(){
		var l=parseInt($('.mxdp ul').css('left'));
		if(l==0){
			$('.wntj').animate({left:-1240},400);
			$('.tj_l').css('color','#B0B1BD');
			$('.tj_r').css('color','#E0E0E0');
		}
	});
	
	
	
	$('.title_btn').mouseenter(function(){
		clearInterval(xp_tm);
	});
	$('.title_btn').mouseleave(function(){
		xp_tm=setInterval(dpgd,4000);
	});
	sf('.cknr ul li');
	sf('.dp ul li');
	sf('.rxcp ul li');
	sf('.nr ul li');
	function sf(obj){
		$(obj).mouseenter(function(){
			$(this).animate({top:-2},100);
		});
		$(obj).mouseleave(function(){
			$(this).animate({top:0},100);
		});
	}
	$('.dp ul li').mouseenter(function(){
		$(this).children('.tc').slideDown(100);
	});
	$('.dp ul li').mouseleave(function(){
		$(this).children('.tc').slideUp(100);
	});
	$('.dpfl li').each(function(index){
		$(this).mouseenter(function(){
			$(this).addClass('dpt').siblings('li').removeClass('dpt');
			$(".dp"+(index+1)+"").css('display','block').siblings('ul').css('display','none');
			$('.dpdh').css('display','block');
		});
	});
	
	$('.pjfl li').each(function(index){
		$(this).mouseenter(function(){
			$(this).addClass('dpt').siblings('li').removeClass('dpt');
			$(".pj"+(index+1)+"").css('display','block').siblings('ul').css('display','none');
			$('.dpdh').css('display','block');
		});
	});
	$('.zbfl li').each(function(index){
		$(this).mouseenter(function(){
			$(this).addClass('dpt').siblings('li').removeClass('dpt');
			$(".zb"+(index+1)+"").css('display','block').siblings('ul').css('display','none');
			$('.dpdh').css('display','block');
		});
	});
	$('.nrr').mouseenter(function(){
		$(this).children('.nll').fadeIn(300);
		$(this).children('.nlr').fadeIn(300);
	});
	$('.nrr').mouseleave(function(){
		$(this).children('.nll').fadeOut(300);
		$(this).children('.nlr').fadeOut(300);
	});
	var nrgd=0;
	$('.nll').click(function(){
		var sb=$(this).siblings('.nr_gd');
		var pt=$(this).parent('.nrr');
		var l=parseInt(sb.css('left'));
		var s=(sb.children('li').length)-1;
		var q=-s*296;
		if(Math.abs(nrgd)<s){
			nrgd--;
			pt.children('.nr_gd').animate({left:nrgd*296},200);
			pt.children('.btn_nr').children().eq(Math.abs(nrgd)).children().addClass('yyy');
			pt.children('.btn_nr').children().eq(Math.abs(nrgd)).siblings('li').children().removeClass('yyy');
		}
	});
	$('.nlr').click(function(){
		var sb=$(this).siblings('.nr_gd');
		var pt=$(this).parent('.nrr');
		var l=parseInt(sb.css('left'));
		var s=(sb.children('li').length)-1;
		var q=-s*296;
		if(Math.abs(nrgd)>0){
			nrgd++;
			pt.children('.nr_gd').animate({left:nrgd*296},200);
			pt.children('.btn_nr').children().eq(Math.abs(nrgd)).children().addClass('yyy');
			pt.children('.btn_nr').children().eq(Math.abs(nrgd)).siblings('li').children().removeClass('yyy');
		}
	});
	$('.nr1 .btn_nr li').each(function(index){
		$(this).click(function(){
			var l=-index*296;
			$('.nr1 .nr_gd').animate({left:l},200);
			$(this).children().addClass('yyy');
			$(this).siblings('li').children().removeClass('yyy');
		});
	});
	$('.nr2 .btn_nr li').each(function(index){
		$(this).click(function(){
			var l=-index*296;
			$('.nr2 .nr_gd').animate({left:l},200);
			$(this).children().addClass('yyy');
			$(this).siblings('li').children().removeClass('yyy');
		});
	});
	$('.nr3 .btn_nr li').each(function(index){
		$(this).click(function(){
			var l=-index*296;
			$('.nr3 .nr_gd').animate({left:l},200);
			$(this).children().addClass('yyy');
			$(this).siblings('li').children().removeClass('yyy');
		});
	});
	$('.nr4 .btn_nr li').each(function(index){
		$(this).click(function(){
			var l=-index*296;
			$('.nr4 .nr_gd').animate({left:l},200);
			$(this).children().addClass('yyy');
			$(this).siblings('li').children().removeClass('yyy');
		});
	});
	$('.sp li img').mouseenter(function(){
		$(this).siblings('.sp_btn').css('background','#FF6700');
	});
	$('.sp li img').mouseleave(function(){
		$(this).siblings('.sp_btn').css('background','#999997');
	});
	$('.bfq img').click(function(){
		$(this).css('display','none')
		$('.bfq video')[0].play();
	});
	$('.bfq video').click(function(){
		$('.bfq video')[0].pause();
		$('.bfq img').css('display','block')
	});
	$('.bfq_t button').click(function(){
		$('.bfq').css('display','none');
		$('.hm').css('display','none');
		$('.bfq video')[0].pause();
	});
	$('.sp img').each(function(index){
		$(this).click(function(){
			$('.bfq video')[0].src="video/"+index+".mp4";
			if(index==2||index==3){
				$('.bfq_t video').css('top','-60px');
			}
			$('.hm').fadeIn(200,function(){
				$('.bfq').slideDown(200);
			});
		});
	});
	
	
	
	
	
	
	
});
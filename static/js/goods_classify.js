$(function(){
    		$("#goods_classify ul li").hover(function(){
				$("#goods_classify ul li").not($(this)).find('h4').stop(false,true);
				$(this).find('h4').animate({"padding-left":10});
				$(this).find("img").attr("src","img/index_img/tb0"+($(this).index()+1)+".png");
				$(this).css({background:'#333333',color:'white','border-color':'#333333'});
				$(this).find('a').css('color','white');
				
//				$('[name="xt"]').eq($(this).index()).animate({opacity:0.9}).css('display',"block"); 
			},function(){
				$("#goods_classify ul li").not($(this)).find('h4').stop(false,true);
				$(this).find('h4').animate({"padding-left":0});
				$(this).find("img").attr("src","img/index_img/tb"+($(this).index()+1)+".png");
				$(this).css({background:'#E3E3E3',color:'black','border-color':'#ccc'});
				$(this).find('a').css('color','#555555');
				
//				$('[name="xt"]').eq($(this).index()).animate({opacity:0.9},0).css('display',"none");
			});
			
			
			
			$("#goods_classify ul li").eq(0).hover(function(){ 
				$('.itemtc_h').animate({opacity:0.9}).css('display',"block"); 
			},function(){
				$('.itemtc_h').animate({opacity:0},0).css('display',"none"); 
			})
			$(".itemtc_h").hover(function(){ $('.itemtc_h').animate({opacity:0.9},0).css('display',"block"); },function(){ $(".itemtc_h").hide() })
    	    
    	    $("#goods_classify ul li").eq(1).hover(function(){
				$('#handpick').animate({opacity:0.9}).css('display',"block"); 
			},function(){
				$('#handpick').animate({opacity:0},0).css('display',"none"); 
			})
			$("#handpick").hover(function(){ $('#handpick').animate({opacity:0.9},0).css('display',"block"); },function(){ $("#handpick").hide() })
    	
    	    $("#goods_classify ul li").eq(2).hover(function(){
				$('.women_dress').animate({opacity:0.9}).css('display',"block"); 
			},function(){
				$('.women_dress').animate({opacity:0},0).css('display',"none"); 
			})
			$(".women_dress").hover(function(){ $('.women_dress').animate({opacity:0.9},0).css('display',"block"); },function(){ $(".women_dress").hide() })
			
			$("#goods_classify ul li").eq(3).hover(function(){
				$('.man_clothing').animate({opacity:0.9}).css('display',"block"); 
			},function(){
				$('.man_clothing').animate({opacity:0},0).css('display',"none"); 
			})
			$(".man_clothing").hover(function(){ $('.man_clothing').animate({opacity:0.9},0).css('display',"block"); },function(){ $(".man_clothing").hide() })
			
			$("#goods_classify ul li").eq(4).hover(function(){
				$('.kids').animate({opacity:0.9}).css('display',"block"); 
			},function(){
				$('.kids').animate({opacity:0},0).css('display',"none"); 
			})
			$(".kids").hover(function(){ $('.kids').animate({opacity:0.9},0).css('display',"block"); },function(){ $(".kids").hide() })
			
			$("#goods_classify ul li").eq(5).hover(function(){
				$('.mama').animate({opacity:0.9}).css('display',"block"); 
			},function(){
				$('.mama').animate({opacity:0},0).css('display',"none"); 
			})
			$(".mama").hover(function(){ $('.mama').animate({opacity:0.9},0).css('display',"block"); },function(){ $(".mama").hide() })
		})
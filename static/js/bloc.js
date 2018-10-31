

	$(function(){
		
		//给li添加移入移出事件
		$('.hd_zppleft ul li').hover(function(){
			clearInterval(timer); //移入li停止定时器
		    $(this).find('a').css('display','none');
		    $(this).find('span').css('display','block');
		},function(){
			timer = setInterval(switchover,5000); //移出li重新开启定时器
		    $(this).find('span').css('display','none');
		    $(this).find('a').css('display','block');
		});
		
		//点击事件  切换/换一批
		$('.hd_zppleft a').first().click(function(){
			
			if($('.hd_zppleft ul:first').is(':visible')){
				$('.hd_zppleft ul:first').hide();
			}else{
				$('.hd_zppleft ul:first').show();
			}
			
			if($('.hd_zppleft ul:eq(1)').is(':visible')){
				$('.hd_zppleft ul:eq(1)').hide();
			}else{
				$('.hd_zppleft ul:eq(1)').show();
			}
			return false;
		});
		
		$('.hd_zppleft img').first().click(function(){
			if($('.hd_zppleft ul:first').is(':visible')){
				$('.hd_zppleft ul:first').hide();
			}else{
				$('.hd_zppleft ul:first').show();
			}
			
			if($('.hd_zppleft ul:eq(1)').is(':visible')){
				$('.hd_zppleft ul:eq(1)').hide();
			}else{
				$('.hd_zppleft ul:eq(1)').show();
			}
		});
		
		//开启定时器  每隔5秒换一批
		var timer = setInterval(switchover,5000);
	    //换一批
		function switchover(){
			if($('.hd_zppleft ul:first').is(':visible')){
				$('.hd_zppleft ul:first').hide();
			}else{
				$('.hd_zppleft ul:first').show();
			}
			
			if($('.hd_zppleft ul:eq(1)').is(':visible')){
				$('.hd_zppleft ul:eq(1)').hide();
			}else{
				$('.hd_zppleft ul:eq(1)').show();
			}
		}
		
		//选项卡效果
		//设置默认样式
		$('.hd_zppright ul:first li').eq(1).css('color','#FF0F3F');
		//给li添加移入事件
		$('.hd_zppright ul:first li').mouseenter(function(){
			// position().left 相对于父元素的偏移量
			$('.bg').css('left',$(this).position().left);
			$(this).css('color','#FF0F3F').siblings().css('color','');
			$('.flower_item').eq($(this).index()).css('display','block').siblings().css('display','none');
		})
	})


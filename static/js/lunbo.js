
	$(function(){
		
		$.get("json/lunbo.json", function(data){
			//2, 显示数据到页面上
			//遍历data数组, 将每个图片显示在页面上
			for (var i=0; i<data.length; i++) {
				var obj = data[i]; 
				var img = obj.img; //img
				var id = obj.id; //id
				var word = obj.word //word			
				//将创建的节点添加到页面上
				$("#bigpic").append( "<li><img src=" + img +" /></li>" );
				$("#smallpic").append( "<li>" + word + "</li>" );
	
			    $("#bigpic").find('img:eq(2)').css("margin-left","300px");
			}
			//开启自动轮播
			lunbo();
		});
		
		function lunbo(){
            // 2）用jquery选择器获取页面元素
            var $focus = $('#focus');
            var $bigpic = $('#bigpic');
            var $smallpic = $('#smallpic');

            var index = 0;//显示图片索引
            var len = $bigpic.children('li').length;
            // 初始化
            show();
            // 3）使用jquery事件与动画
            var timer = setInterval(animation,3000);

            // 鼠标移入停止，移除继续
            $focus.on('mouseenter',function(){
                clearInterval(timer);
            }).on('mouseleave',function(){
                timer = setInterval(animation,3000);
            });

            // 点击小图切换效果
            $smallpic.on('mouseenter','li',function(){
            	$bigpic.children('li').stop(false,true);
                index = $(this).index();
                show();
            });

            //前后按钮
            $focus.on('click','a.prev',function(){
                index--;
                show();
            }).on('click','a.next',function(){
                index++;
                show();
            });

            // 图片切换
            function animation(){
                index++;
                show();
            }
            // 显示图片
            // 当前大图透明度为1，其他为0
            // 当前小兔透明度为1，其他为0.5
            function show(){
                if(index==len){
                    index=0;
                }else if(index < 0){
                    index = len - 1;
                }
                $bigpic.children('li').eq(index).animate({opacity:1},700).siblings().animate({opacity:0},700);
                $smallpic.children('li').eq(index).css({color:'white',background:'#333333'}).siblings().css({color:'black',background:'white'});
            }
        }
		
    });


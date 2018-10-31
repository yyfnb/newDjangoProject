
$(function(){
	
	$.get('json/tab_brand.json',function(data){
		
		for(var i=0;i<data.length;i++){
			var obj = data[i];
			var word = obj.word;
			
			$('#tab_brand').append("<li>"+ word +"</li>");
			//设置默认样式
			$('#tab_brand li').eq(0).css( { color:'white',background:'url(img/index_img/2.png)'} );
		}
	})
	
	$.get('json/hanfeng_nvz.json',function(data){
		
		for(var i=0;i<data.length;i++){
			//获取数据
			var obj = data[i];
			var img = obj.img;
			var price = obj.price;
			var del_price = obj.del_price;
			var buy = obj.buy;
			var id = obj.id;
			//创建节点
			
			$('#floor_con1').append("<li><a href='goodsinfo.html?"+id+"'><img src="+ img +"/></a><p>"+ price +"<del>"+ del_price +"</del></p><span>"+ buy +"</span></li>");

		
		}
	})
	
	$.get('json/hanfeng_nanz.json',function(data){
		
		for(var i=0;i<data.length;i++){
			//获取数据
			var obj = data[i];
			var img = obj.img;
			var price = obj.price;
			var del_price = obj.del_price;
			var buy = obj.buy;
			var id = obj.id;
			//创建节点
//			console.log(id);
			$('#floor_con2').append("<li><a href='goodsinfo.html?"+id+"'><img src="+ img +"/></a><p>"+ price +"<del>"+ del_price +"</del></p><span>"+ buy +"</span></li>");
		}	
	})
	
	$.get('json/dikuina.json',function(data){
		
		for(var i=0;i<data.length;i++){
			//获取数据
			var obj = data[i];
			var img = obj.img;
			var price = obj.price;
			var del_price = obj.del_price;
			var buy = obj.buy;
			var id = obj.id;
			//创建节点
			
			$('#floor_con3').append("<li><a href='goodsinfo.html?"+id+"'><img src="+ img +"/></a><p>"+ price +"<del>"+ del_price +"</del></p><span>"+ buy +"</span></li>");
		}	
	})
	
	$.get('json/hanfeng_mingy.json',function(data){
		
		for(var i=0;i<data.length;i++){
			//获取数据
			var obj = data[i];
			var img = obj.img;
			var price = obj.price;
			var del_price = obj.del_price;
			var buy = obj.buy;
			var id = obj.id;
			//创建节点
			
			$('#floor_con4').append("<li><a href='goodsinfo.html?"+id+"'><img src="+ img +"/></a><p>"+ price +"<del>"+ del_price +"</del></p><span>"+ buy +"</span></li>");
		}	
	})
	
	$.get('json/hanfeng_tongz.json',function(data){
		
		for(var i=0;i<data.length;i++){
			//获取数据
			var obj = data[i];
			var img = obj.img;
			var price = obj.price;
			var del_price = obj.del_price;
			var buy = obj.buy;
			var id = obj.id;
			//创建节点
			
			$('#floor_con5').append("<li><a href='goodsinfo.html?"+id+"'><img src="+ img +"/></a><p>"+ price +"<del>"+ del_price +"</del></p><span>"+ buy +"</span></li>");
		}	
	})
	
	//轮播
	new_arrial_lunbo();
	
	function  new_arrial_lunbo(){
            // 2）用jquery选择器获取页面元素
            var $focus = $('#new_arrial');
            
            var $bigpic = $('#floor_list'); //大
            var $smallpic = $('#tab_brand'); //小

            var index = 0;//显示图片索引
            var len = $bigpic.children('ul').length;
            // 初始化
            show();
            // 3）使用jquery事件与动画
            var timer = setInterval(animation,3000);

            // 鼠标移入停止，移除继续
            $smallpic.on('mouseenter',function(){
                clearInterval(timer);
            }).on('mouseleave',function(){
                timer = setInterval(animation,3000);
            });
            
            $bigpic.find('ul').on('mouseenter',function(){
                clearInterval(timer);
            }).on('mouseleave',function(){
                timer = setInterval(animation,3000);
            });
            
            // 小图切换效果
            $smallpic.on('mouseenter','li',function(){
            	$bigpic.children('ul').stop(false,true);
                index = $(this).index();
                show();
            });

            //前后按钮
//          $focus.on('click','a.prev',function(){
//              index--;
//              show();
//          }).on('click','a.next',function(){
//              index++;
//              show();
//          });

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
                $bigpic.children('ul').eq(index).animate({opacity:1},1000).siblings().animate({opacity:0},1000);
                $bigpic.children('ul').eq(index).css("z-index",99).siblings().css("z-index",0);
                $smallpic.children('li').eq(index).css({color:'white',background:'url(img/index_img/2.png)'}).siblings().css({color:'black',background:'white'});
            }
        }
})

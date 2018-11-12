


$(function(){
				

		//加减点击事件
		//加
		$('.increase').click(function(){
			var goodsnum = parseInt( $('.amount-widget input').val() );
			goodsnum++;
			$('.amount-widget input').val( goodsnum );
			
		})
		//减
		$('.decrease').click(function(){
			var goodsnum = parseInt( $('.amount-widget input').val() );
			goodsnum--;
			if( goodsnum<0 ){
				goodsnum = 0;
				$('.amount-widget input').val( goodsnum );
			}else{
				$('.amount-widget input').val( goodsnum );
			}
			
		})
		
		
		
		$('.toolTip_box h3 b').click(function(){
			$('.toolTip_box').hide();
		})
		$('.toolTip_box div').click(function(){
			$('.toolTip_box').hide();
		})
		
		$('.addSucceed h3 b').click(function(){
			$('.addSucceed').hide();
		})
		$('.addSucceed img').click(function(){
			$('.addSucceed').hide();
		})
		
		$('.tabbar li').click(function(){

			$(this).addClass('current').siblings().removeClass('current');
			$('.flat_content .Li').css('display','none').eq($(this).index()).css('display','block');
			
		})
		
		
		
		//json动态添加数据
// 		$.get('json/goodsinfo.json',function(data){
//
// 			var goodsId = location.search.replace("?","");
// //			console.log(goodsId);
//
// 			for(var j = 0;j<data.length;j++){
// 				var obj = data[j];
// //				console.log(obj.id);
// 				if( goodsId == obj.id ){
//
// 					var id = goodsId;
// 					var path = obj.path;
// 					var weizhi = obj.weizhi;
// 					for(var i = 0;i<path.length;i++){
//
// 						$('#detail_crumb').append("<code>"+ path[i] +"</code><a>"+ weizhi[i] +"</a>");
// 					}
//
// 					var hotFenlei = obj.hotFenlei;
// 					for(var i = 0; i<hotFenlei.length; i++){
//
// 						$('#cate_guide').append("<li>"+ hotFenlei[i] +"</li>");
//
// 					}
//
// 					var NewArrival = obj.NewArrival;
// 					for(var i = 0; i<NewArrival.length; i++){
// 						var NewArrivalObj  = NewArrival[i];
// 						var goodsListImg   = NewArrivalObj.goodsListImg;
// 						var goodsListP 	   = NewArrivalObj.goodsListP;
// 						var goodsListPrice = NewArrivalObj.goodsListPrice;
// 						var goodsListDel   = NewArrivalObj.goodsListDel;
//
// 						$('.new_goods ul').append("<li><img src="+goodsListImg+" /><p>"+goodsListP+"</p><span>"+goodsListPrice+"</span><del>"+goodsListDel+"</del></li>")
// 					}
//
// 					var popularityHotSale = obj.popularityHotSale;
// 					for(var i = 0; i<popularityHotSale.length; i++){
// 						var popularityHotSaleObj  = popularityHotSale[i];
// 						var goodsListImg          = popularityHotSaleObj.goodsListImg;
// 						var goodsListP 	   		  = popularityHotSaleObj.goodsListP;
// 						var goodsListPrice 	 	  = popularityHotSaleObj.goodsListPrice;
// 						var goodsListDel   		  = popularityHotSaleObj.goodsListDel;
//
// 						$('.hot_goods ul').append("<li><img src="+goodsListImg+" /><p>"+goodsListP+"</p><span>"+goodsListPrice+"</span><del>"+goodsListDel+"</del></li>")
// 					}
//
// 					var zoomPad = obj.zoomPad;
// 					for(var i = 0; i<zoomPad.length; i++){
// 	//					console.log(zoomPad[i]);
// 						$('.zoomPad').append("<img src="+ zoomPad[i] +" />");
// 						$('.zoomPad img').eq(0).css("display","block");
// 						$('.bigArea').append("<img src="+ zoomPad[i] +" />");
// 						$('.gallery_nav').append("<li><s></s><img src="+ zoomPad[i] +" /></li>");
// 					}
// 					//放大镜
// 						var _smallImg = $(".zoomPad"); //小图
// 						var _smallArea = $(".zoomPup"); //小区域
// 						var _bigImg = $(".bigArea img"); //大图
// 						var _bigArea = $(".bigArea"); //大区域
//
// 						//bigImg.width / smallImg.width = bigArea.width/smallArea.width
// 						//smallArea.width = bigArea.width * smallImg.width / bigImg.width
// 						//计算小区域的宽高
// 						//width() == innnerWidth() == outerWidth()
// 						_smallArea.width( _bigArea.width() * _smallImg.width() / _bigImg.width() );
// 						_smallArea.height( _bigArea.height() * _smallImg.height() / _bigImg.height() );
//
// 						//放大系数/放大倍数
// 						var scale = _bigImg.width() / _smallImg.width();
// 						//scale = 4
//
// 						//mousemove
// 						_smallImg.mousemove(function(e){
// 							_smallArea.show(); //显示小区域
// 							_bigArea.show(); //显示大区域
// 							//clientX: 可视区域的x值
// 							//pageX: 距离窗口左边的x值
// 							var x = e.pageX - _smallImg.offset().left - _smallArea.width()/2;
// 							var y = e.pageY - _smallImg.offset().top - _smallArea.height()/2;
// 							//console.log(e.clientX);
// 							//console.log(e.pageX);
//
// 							//控制小区域范围在小图内
// 							if (x <= 0) { //不超出左边
// 								x = 0;
// 							}
// 							else if (x >= _smallImg.width()-_smallArea.width()) { //不超出右边
// 								x = _smallImg.width()-_smallArea.width();
// 							}
// 							if (y <= 0) { //不超出上边
// 								y = 0;
// 							}
// 							else if (y >= _smallImg.height()-_smallArea.height()) { //不超出下边
// 								y = _smallImg.height()-_smallArea.height();
// 							}
//
//
// 							//移动小区域
// 							_smallArea.css({left: x, top: y});
//
// 							//移动大图
// 							_bigImg.css({left: -x*scale, top: -y*scale});
//
//
// 						})
//
// 						//mouseleave
// 						_smallImg.mouseleave(function(){
// 							_smallArea.hide(); //隐藏小区域
// 							_bigArea.hide(); //隐藏小区域
// 						})
//
// 					//点击事件
// 					$('.gallery_nav li').click(function(){
//
// 						$('.gallery_nav li img').css('border-color','white').eq($(this).index()).css('border-color','#c80a28');
//
// 						$('.gallery_nav li s').css('display','none').eq($(this).index()).css('display','block');
//
// 						$('.zoomPad img').css('display','none').eq($(this).index()).css('display','block');
// 						$('.bigArea img').css('display','none').eq($(this).index()).css('display','block');
//
// 					})
//
// 					$('.product_detail_info h1').html( obj.title );
// 					$('.code').html( obj.code );
// 					$('.market_price').html( "￥"+obj.marketPrice+".00" );
// 					$('.promotionPrice').html( "￥"+obj.promotionPrice+".00" );
// 					$('.sales').html( obj.sales );
//
// 					var size = obj.size;
// 					for(var i=0; i<size.length; i++){
// 						$('.size').append("<li><span>"+ size[i] +"</span><s></s></li>");
// 						$('.size li').eq(0).addClass('sel');
// 					}
//
// 					var goodsRepertory = obj.inventory;//商品库存
// 					$('.inventory b').html( goodsRepertory[0] );
// 					$('#GoodsSelected span:first').html("["+ $('.goods_attr:first ul li').find('span').html() +"]");
// 					$('.goods_attr:first ul li').click(function(){
//
// 						if( $(this).hasClass('sel') ){
// 							$(this).removeClass('sel');
// 							$('#GoodsSelected span:first').html("");
// 						}else{
// 							$(this).addClass('sel').siblings().removeClass('sel');
// 							$('#GoodsSelected span:first').html("["+ $(this).find('span').html() +"]");
// 						}
//
// 						if(	!$('.goods_attr ul li').hasClass('sel') ){
// 							$('.GoodsSelected').show();
// 							$('#GoodsSelected').hide();
// 						}else{
// 							$('.GoodsSelected').hide();
// 							$('#GoodsSelected').show();
// 						}
// 						for(var i=0;i<goodsRepertory.length;i++){
//
// 							$('.inventory b').html( goodsRepertory[$(this).index()] );
//
// 						}
//
// 					})
//
// 					var color = obj.color;
// 					for(var i=0; i<color.length; i++){
// 						$('.color').append("<li><span>"+ color[i] +"</span><s></s></li>");
// 						$('.color li').eq(0).addClass('sel');
// 					}
//
// 					$('#GoodsSelected span:eq(1)').html("["+ $('.goods_attr:eq(1) ul li').find('span').html() +"]");
// 					$('.goods_attr:eq(1) ul li').click(function(){
//
// 						if( $(this).hasClass('sel') ){
// 							$(this).removeClass('sel');
// 							$('#GoodsSelected span:eq(1)').html("");
// 						}else{
// 							$(this).addClass('sel').siblings().removeClass('sel');
// 							$('#GoodsSelected span:eq(1)').html("["+ $(this).find('span').html() +"]");
// 						}
//
// 						if(	!$('.goods_attr ul li').hasClass('sel') ){
// 							$('.GoodsSelected').show();
// 							$('#GoodsSelected').hide();
// 						}else{
// 							$('.GoodsSelected').hide();
// 							$('#GoodsSelected').show();
// 						}
//
// 					})
//
// 					//点击加入购物车
// 					$('.addCart').click(function(){
// 						var goodsnum = parseInt( $('.amount-widget input').val() );
// 						//判断
// 						if( goodsnum==0 && !$('.goods_attr ul li').hasClass('sel') ){
// 							alert("请输入正确的购买数量");
// 						}else if( goodsnum>0 && !$('.goods_attr ul li').hasClass('sel') ){
// 							alert("尺码：没有选择");
// 						}else if( goodsnum>=0 && $('.goods_attr:first ul li').hasClass('sel') && !$('.goods_attr:eq(1) ul li').hasClass('sel') ){
// 							alert("颜色：没有选择");
// 						}else if( goodsnum>=0 && !$('.goods_attr:first ul li').hasClass('sel') && $('.goods_attr:eq(1) ul li').hasClass('sel') ){
// 							alert("尺码：没有选择");
// 						}
//
// 						if( (goodsnum<1 || goodsnum>99) && $('.goods_attr:first ul li').hasClass('sel')&&$('.goods_attr:eq(1) ul li').hasClass('sel') ){
// 							$('.toolTip_box').show();
// 							$('.toolTip_box p').html("商品数量不能多于99件或者小于1件");
// 						}
// 						var inventoryNum = $('.inventory b').html();
// 						if( goodsnum>inventoryNum && goodsnum<100 && $('.goods_attr:first ul li').hasClass('sel')&&$('.goods_attr:eq(1) ul li').hasClass('sel') ){
// 							$('.toolTip_box').show();
// 							$('.toolTip_box p').html("对不起，该商品已经库存不足或暂停销售。 你现在要进行缺货登记来预订该商品吗？");
// 						}
//
// 						if( $('.toolTip_box').is(':visible') ){
// 							setTimeout(function(){
// 								$('.toolTip_box').hide();
// 							},3000)
// 						}
//
// 						var userMsg = $.cookie("userMsg");
// 						if( userMsg && goodsnum>0 && goodsnum<=inventoryNum && $('.goods_attr:first ul li').hasClass('sel')&&$('.goods_attr:eq(1) ul li').hasClass('sel') ){
// 							$('.addSucceed').show();
// 							//添加成功  添加到购物车
//
// 							var Color = $('#GoodsSelected span:eq(1)').html().replace('[','').replace(']','');
// 							var Size = $('#GoodsSelected span:first').html().replace('[','').replace(']','');
// 							var MarketPrice = parseInt($('.market_price').html().replace('￥',''));
// 							var PromotionPrice = parseInt($('.promotionPrice').html().replace('￥',''));
// 							var UserName = $('#global_right ul li:first').text().replace('欢迎您，','');
// //							console.log( PromotionPrice );
// 							//获取之前保存在cookie中的购物车信息
// 							var arr = $.cookie("cart") ? JSON.parse( $.cookie("cart") ) : [];
// 							//遍历查找是否之前的购物车cookie中存在即将添加的商品
// 							var isExist = false; //表示是否存在该商品
// 							for(var i=0; i<arr.length; i++) {
// 								//如果存在该商品, 把数量增加
// 								if ( UserName==arr[i].username && goodsId == arr[i].id && Color==arr[i].color && Size==arr[i].size ) {
// 									arr[i].num += goodsnum;
// 									isExist = true; //表示存在该商品
// 								}
// 							}
//
// 							//如果不存在, 则添加一个新商品
// 							if (!isExist) {
// 								//商品对象
// 								var goods = {
// 									username: UserName,
// 									id: goodsId,
// 									brandName: $('#detail_crumb a:eq(1)').html(),
// 									goodsImg: zoomPad[0],
// 									title: $('.product_detail_info h1').html(),
// 									color: Color,
// 									size: Size,
// 									marketPrice: MarketPrice,
// 									promotionPrice: PromotionPrice,
// 									num: goodsnum //商品数量
// 								}
// 								arr.push(goods);
// 							}
//
// 							//保存到cookie中
// 							$.cookie("cart", JSON.stringify(arr), {expires:30, path:"/"});
// 							console.log( $.cookie("cart") );
//
//
// 						}else{
// 							alert("您还没有登录！")
// 						}
//
// 					})
//
// 					$('#J_attrBrandName span').html( $('#detail_crumb a:eq(1)').html() );
// 					$('#J_AttrUL li:eq(1) span').html( "&nbsp;"+obj.code );
// 					for(var i=0; i<size.length; i++){
// 						$('#J_AttrUL li:eq(2) span').append( "&nbsp;"+size[i] );
// 					}
// 					for(var i=0; i<color.length; i++){
// 						$('#J_AttrUL li:eq(3) span').append( "&nbsp;"+color[i] );
// 					}
//
// 					var quanbuImg = obj.quanbu;
// 					for(var i=0; i<quanbuImg.length; i++){
// 						$('.quanbu').append("<img src="+ quanbuImg[i] +" />");
// 					}
//
// 					var comments = obj.comments;
// //					console.log(comments);
// 					for(var i=0; i<comments.length; i++){
// 						var commentsObj = comments[i];
// 						var isFit = commentsObj.isFit;
// 						var content = commentsObj.content;
// 						var buyer = commentsObj.buyer;
// 						var guigesize = commentsObj.guigesize;
// 						var guigecolor = commentsObj.guigecolor;
// 						var grade = commentsObj.grade;
// 						var time = commentsObj.time;
// 						var liNode = $('<li></li>');
// 						$('.New_goodCONPLlist').append(liNode);
// 						liNode.append("<div><span><strong>是否合身：</strong>"+ isFit +"</span></div>");
// 						liNode.append("<div><div>"+ content +"</div><div>"+ buyer +"</div></div>");
// 						liNode.append("<div><span><strong>规格：</strong>颜色:"+guigecolor+" 尺码:"+guigesize+"</span><span><strong>评分：</strong></span></div>");
// //						alert(grade);
//
// 						for(var k=0; k<grade.length; k++){
// 							liNode.find('div:eq(4)').append("<img src="+ grade[k] +" />");
// 						}
//
// 						liNode.append("<div>"+ time +"</div>");
// 					}
// 					$('#goods_comments_a span').html("("+ $('.New_goodCONPLlist li').length +")");
// 					$('.product_detail_info ul li:eq(3) span:eq(1)').html( $('.New_goodCONPLlist li').length );
// 					//console.log( $('.New_goodCONPLlist li').length );
// 				}
//
// 			}
//
// 		})
		$('#addcart').click(function () {
			//获取id number
			var goodsid = $(this).attr('goodsid')
			var number = $('#number').val()
			var goodssize = $('.selectli').html()
			var $that = $(this)

			// 发起ajax请求
			$.get('/addcart/',{'goodsid':goodsid,'number':number,'goodssize':goodssize},function (response) {


            })

        })

		// sizebt1 = false
		// $('#sizebt1').click(function () {
		//
		//
        // })
		//
		// function sizebt1show() {
		//
		// 	sizebt1 = false
		// 	$('#sizebt1').addClass('ii')
		//
        // }
//				尺码

		$('.sizili').click(function () {
			$('.sizili').removeClass('selectli')
			$(this).addClass('selectli')
			console.log('1')




        })

		//
		// $('.product_detail_info .size #sizebt2').click(function () {
		// 	$('.size i').hide()
		// 	console.log('2')
		// 	var goodssize = $(this).html()
		//
		// 	$('.ii2').show();
		//
		//
        // })
	
})
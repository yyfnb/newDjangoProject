

$(function(){
	
	$('#nothing').show();
	
	//从cookie中获取购物车的所有商品
	var arr = $.cookie("cart");
	var userMsg = $.cookie("userMsg");
	if (arr) {
		arr = JSON.parse(arr);
		userMsg = JSON.parse(userMsg);
		//[{"id":"7","brandName":"AMH男装","goodsImg":"img/goodsinfo/1047315_G_1470107213304.jpg",
		//"title":"AMH男装韩版2016秋季新款尖领修身字母印花长袖衬衫男士NQ6704","color":"蓝色","size":"M",
		//"marketPrice":228,"promotionPrice":176,"num":1}]
		var goodsSum = 0;
		var totalPrice = 0;
		//遍历数组, 显示所有商品的信息
		for (var i=0; i<arr.length; i++) {
			var goodsObj = arr[i];
			if( arr[i]!="" && userMsg.user==goodsObj.username ){
				
				$('#nothing').hide();
				$('.brand_cart').show();
				$('#sumPrice').show();
				$('.shopping_car_bottom_bg').show();
				$('#go_on').show();
				$('#jiesuan').show();
				
				var liNode = $("<li></li>").addClass('Li');
				$('.brand_cart').append(liNode);
				liNode.append("<h3>品牌："+ goodsObj.brandName +"</h3>");
				var shopProduct = $("<div></div>").addClass('shop_product');
				var shopProductPic = $("<div></div>").addClass('shop_product_pic');
				shopProductPic.append("<a href='goodsinfo.html?"+goodsObj.id+"'><img src="+ goodsObj.goodsImg +" /></a>");
				shopProduct.append( shopProductPic );
				var shopProductName = $("<div>"+ goodsObj.title +"</div>").addClass('shop_product_name');
				shopProduct.append( shopProductName );
				var shopProductSize = $("<div></div>").addClass('shop_product_size');
				shopProductSize.append("<span>颜色:<a>"+ goodsObj.color +"</a> &nbsp;&nbsp;&nbsp;尺码:<a>"+goodsObj.size+"</a></span>");
				shopProduct.append( shopProductSize );
				liNode.append( shopProduct );
				
				var shopProductMoney = $("<div></div>").addClass("shop_product_money");
				var cprice = $("<div></div>").addClass('cprice');
				cprice.append("<del>￥"+goodsObj.marketPrice+".00</del><br><span>￥"+goodsObj.promotionPrice+" </span>");
				shopProductMoney.append( cprice );
				liNode.append( shopProductMoney );
				
				var shopProductNum = $("<div></div>").addClass("shop_product_number");
				var amountWidget = $("<span></span>").addClass('amount-widget');
				amountWidget.append( $("<span>+</span>").addClass('increase') );
				amountWidget.append( $("<span>-</span>").addClass('decrease') );
				amountWidget.append( $("<input type='text' maxlength='3' value='"+goodsObj.num+"' />").addClass('text') );
				shopProductNum.append( amountWidget );
				liNode.append( shopProductNum );
				
				liNode.append( $("<div>￥"+ goodsObj.promotionPrice*goodsObj.num +".00</div>").addClass('shop_product_money00') );
				
				var shopProductClose = $("<div></div>").addClass('shop_product_close');
				var middle = $("<div></div>").addClass('middle');
				middle.append("<span> 删除</span>");
				shopProductClose.append( middle );
				liNode.append( shopProductClose );
				
				goodsSum += goodsObj.num;
				$('#goods_allnum').html( goodsSum );
				
				totalPrice += goodsObj.promotionPrice*goodsObj.num;
				$('#total_Price').html( "￥"+totalPrice+".00" );
				$('#totalAmount').html( totalPrice );
				
			}			
		}
		
		//加减点击事件
		//加
		$('.increase').click(function(){
			var goodsnum = parseInt( $(this).parent().find('input').val() );
			var goodsPrice = parseInt( $('.cprice').eq($(this).parents("li").index()).find('span').html().replace('￥','') );
//			console.log(goodsPrice);
			goodsnum++;
			$(this).parent().find('input').val( goodsnum );
			$('.shop_product_money00').eq($(this).parents("li").index()).html( "￥"+goodsnum*goodsPrice+".00" );
			countTotalPrice();//计算总价
			//数量修改之后重新存入cookie
			var shopName = $('.shop_product_name').eq($(this).parents("li").index()).html();
			var shopColor = $('.shop_product_size').eq($(this).parents("li").index()).find('a:first').html();
			var shopSize = $('.shop_product_size').eq($(this).parents("li").index()).find('a:eq(1)').html();
			var arr = $.cookie("cart"); 
			if (arr) {
				arr = JSON.parse(arr);
				for(var i=0; i<arr.length; i++){
					if( userMsg.user==arr[i].username && shopName==arr[i].title && shopColor==arr[i].color && shopSize==arr[i].size ){
						arr[i].num = goodsnum;
						console.log(arr);
						$.cookie("cart", JSON.stringify(arr), {expires:30, path:"/"});
						console.log( $.cookie("cart") );
					}
				}
			}
		
		})
		//减
		$('.decrease').click(function(){
			var goodsnum = parseInt( $(this).siblings('input').val() );
			var goodsPrice = parseInt( $('.cprice').eq($(this).parents("li").index()).find('span').html().replace('￥','') );
			
			goodsnum--;
			if( goodsnum<1 ){
				goodsnum = 1;
				$(this).siblings('input').val( goodsnum );
			}else{
				$(this).siblings('input').val( goodsnum );
				$('.shop_product_money00').eq($(this).parents("li").index()).html( "￥"+goodsnum*goodsPrice+".00" );
				countTotalPrice();//计算总价
				//数量修改之后重新存入cookie
				var shopName = $('.shop_product_name').eq($(this).parents("li").index()).html();
				var shopColor = $('.shop_product_size').eq($(this).parents("li").index()).find('a:first').html();
				var shopSize = $('.shop_product_size').eq($(this).parents("li").index()).find('a:eq(1)').html();
				var arr = $.cookie("cart"); 
				if (arr) {
					arr = JSON.parse(arr);
					for(var i=0; i<arr.length; i++){
						if( userMsg.user==arr[i].username && shopName==arr[i].title && shopColor==arr[i].color && shopSize==arr[i].size ){
							arr[i].num = goodsnum;
							console.log(arr);
							$.cookie("cart", JSON.stringify(arr), {expires:30, path:"/"});
							console.log( $.cookie("cart") );
						}
					}
				}
			}
			
		})
		
		//input失去焦点事件
		$('.text').change(function(){
			
			var goodsnum = parseInt( $(this).val() );
			var goodsPrice = parseInt( $('.cprice').eq($(this).parents("li").index()).find('span').html().replace('￥','') );
			if( goodsnum<=0 || $(this).val()=="" ){
				alert("请输入正确的购买数量");
			}else{
				$('.shop_product_money00').eq($(this).parents("li").index()).html( "￥"+goodsnum*goodsPrice+".00" );
				countTotalPrice();//计算总价
				//数量修改之后重新存入cookie
				var shopName = $('.shop_product_name').eq($(this).parents("li").index()).html();
				var shopColor = $('.shop_product_size').eq($(this).parents("li").index()).find('a:first').html();
				var shopSize = $('.shop_product_size').eq($(this).parents("li").index()).find('a:eq(1)').html();
				var arr = $.cookie("cart"); 
				if (arr) {
					arr = JSON.parse(arr);
					for(var i=0; i<arr.length; i++){
						if( userMsg.user==arr[i].username && shopName==arr[i].title && shopColor==arr[i].color && shopSize==arr[i].size ){
							arr[i].num = goodsnum;
							console.log(arr);
							$.cookie("cart", JSON.stringify(arr), {expires:30, path:"/"});
							console.log( $.cookie("cart") );
						}
					}
				}
			}
			
		})
		
		//删除商品

		//计算总价的函数

	}
$('.middle span').click(function(){


// 			//删除对应cookie
// 			var shopName = $('.shop_product_name').eq($(this).parents("li").index()).html();
// 			var shopColor = $('.shop_product_size').eq($(this).parents("li").index()).find('a:first').html();
// 			var shopSize = $('.shop_product_size').eq($(this).parents("li").index()).find('a:eq(1)').html();
// //			console.log( shopName+","+shopColor+","+shopSize );
//
// 			var arr = $.cookie("cart");
// 			if (arr) {
// 				arr = JSON.parse(arr);
// 				for(var i=0; i<arr.length; i++){
// 					if( userMsg.user==arr[i].username && shopName==arr[i].title && shopColor==arr[i].color && shopSize==arr[i].size ){
// 						arr.splice(i,1);
// 						console.log(arr);
// 						$.cookie("cart", JSON.stringify(arr), {expires:30, path:"/"});
// 						console.log( $.cookie("cart") );
// 					}
// 				}
// 			}

			//删除该商品
			console.log($(this).parent().parent().parent())
			$(this).parent().parent().parent().remove()
			//删除之后重新计算商品数量和总价
			countTotalPrice();
			var goodsid = $(this).attr('goodsid')
			$.get('/delcart/',{'goodsid':goodsid},function (response) {

            })
			//当购物车没有商品 显示没有商品
			// if( $('.brand_cart li').length==0 ){
			//
			// 	$('#nothing').show();
			// 	$('.brand_cart').hide();
			// 	$('#sumPrice').hide();
			// 	$('.shopping_car_bottom_bg').hide();
			// 	$('#go_on').hide();
			// 	$('#jiesuan').hide();
			//
			// }


		})
countTotalPrice()

		function countTotalPrice(){

			var sum = 0;
			$('.text').each(function(){
				sum += parseInt( $(this).find('.amount-widget').html() );
				pricesum = parseInt( $(this).find('.amount-widget').html() ) *
					parseInt( $(this).find('.cprice span').html() )

				console.log(sum)
				$(this).find('.shop_product_money00').html(pricesum);
				// $('.sumPrice .td_len1').html( sum );
			})

			var totalPrice = 0;

			$('.shop_product_money00').each(function(){
				totalPrice += parseInt( $(this).html().replace('￥','') );
				$('#total_Price').html( "￥"+totalPrice+".00" );
				$('#totalAmount').html( totalPrice );
			})

		}

})
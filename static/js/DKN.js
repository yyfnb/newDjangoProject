

$(function(){
	
	$.get('json/DKN.json',function(data){
		
		var obj = data[0];
		var H_list = obj.H_list;
		for(var i=0;i<H_list.length;i++){ 
			$('#DKN h1 ul').append("<li>"+ H_list[i] +"</li>");
		}
		$('#DKN h1 ul li:first').css('color','red');
		
		var s_img_img = obj.s_img_img;
		var s_img_div = obj.s_img_div;
		var s_img_span = obj.s_img_span;
		$('#DKN .s_img').append("<img src="+ s_img_img +"/>");
		$('#DKN .s_img').append("<div>"+s_img_div+"<span>"+s_img_span+"</span></div>");
		$('#DKN .s_img div').css('background','#DAB866');
		
		var s_cate1 = obj.s_cate1;
		for(var i=0;i<s_cate1.length;i++){ 
			$('#DKN .s_cate1').append("<a>"+ s_cate1[i] +"</a>");
		}
		
		var s_cate2 = obj.s_cate2;
		for(var i=0;i<s_cate2.length;i++){ 
			$('#DKN .s_cate2').append("<a>"+ s_cate2[i] +"</a>");
		}
		$('#DKN .s_cate2 a:eq(0)').css('color','#DAB866');
		
		var fl_img = obj.fl_img;
		$('#DKN .fl_img').append("<img src="+ fl_img +"/>");
		var fl_img21 = obj.fl_img21;
		var fl_img22 = obj.fl_img22;
		$('#DKN .fl_img2').append("<img src="+ fl_img21 +"/>");
		$('#DKN .fl_img2').append("<img src="+ fl_img22 +"/>");
		
		var HSTYLE_list = obj.HSTYLE_list; //数组
		for(var i=0;i<HSTYLE_list.length;i++){
			var HSTYLE_list_obj = HSTYLE_list[i]; //对象
			var img = HSTYLE_list_obj.img;
			var price = HSTYLE_list_obj.price;
			var del_price = HSTYLE_list_obj.del_price;
			var buy = HSTYLE_list_obj.buy;
			var id = HSTYLE_list_obj.id;
			
			$('#DKN .HSTYLE_list').append("<li><a href='goodsinfo.html?"+id+"'><img src="+ img +"/></a><p>"+ price +"<del>"+ del_price +"</del></p><span>"+ buy +"</span></li>");
		}
	})
	
})

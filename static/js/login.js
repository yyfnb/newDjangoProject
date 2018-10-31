

$(function(){
	
	$('.news_loginright_list li input').focus(function(){
		
		$('.news_loginright_list li input').css('border-color','#dedede');
		$(this).css({'border-color':'black','color':'black'});
		
	})
	
	$('.news_loginright_list li input').blur(function(){
		
		$('.news_loginright_list li input').css({'border-color':'#dedede','color':'#BBBBBB'});
	
	})
	
	//随机验证码
	function randomyzm(){
		var arr=[];
        for(var i=0;i<4;i++){
            var random_01=Math.round(Math.random());//随机1,0 if语句1输出数字 0输出大写英文
            if(random_01==1){
                arr[i]=parseInt(Math.random()*10);//获取0-9的整数
            }else{
                arr[i]= String.fromCharCode(parseInt(Math.random()*26+65));//英文根据ascii码转换
                // 用String.fromCharCode() 数字转大写字母
            }
        }
//     document.write(arr.join(""));
       $('.login_list_yzm').html( arr.join("") );
	}
 
    $('.login_list_yzm').css('color',getRandomColor);
    //随机色
    function getRandomColor(){
    	return "#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6);
	}
    //点击刷新验证码
    $('.login_list_yzm').click(function(){
    	randomyzm();
        $('.login_list_yzm').css('color',getRandomColor);
//      console.log( $('.register_list_yzm').html() );
    })
    
    // //验证验证码是否正确
    // var y=0;
	// $(".yanzheng").change(function(){
	//
	// 	if ( $(".yanzheng").val().toLowerCase()!= $('.login_list_yzm').html().toLowerCase() || $(".yanzheng").val()=="" ) {
	// 		y=0;
	// 		$('.login_error').html("验证码错误");
	// 	}else{
	// 		y++;
	// 		if(y==1){
	// 			$('.login_error').html("验证码正确").css('color','black');
	// 		}
	// 	}
	//
	// })
	
// 	//点击登录按钮
// 	$(".login_btn").click(function(){
// //		console.log(y)
// 		//获取cookie中注册过的所有用户
// 		var users = $.cookie("users");
// 		if (users) {
// 			users = JSON.parse(users);
//
// 			//遍历查找是否有匹配的用户
// 			var isExist = false; //表示是否存在该用户
// 			for (var i=0; i<users.length; i++) {
// 				if ( $(".news_logintxt:eq(0)").val() == users[i].name && $(".news_logintxt:eq(1)").val() == users[i].pwd && y>=1 ) {
//
// 					$('.login_error').html("");
// 					$(".yanzheng").val('');
// 					y=0;
// 					alert("登录成功!");
// 					//跳转到首页
// 					var userMsg = {
// 						user: $(".news_logintxt:eq(0)").val(),
// 						pwd: $(".news_logintxt:eq(1)").val()
// 					}
// 					//保存到cookie中
// 					$.cookie("userMsg", JSON.stringify(userMsg), {expires:null, path:"/"});
// 					console.log( $.cookie("userMsg") );
//
// 					location.href = "index.html?user="+userMsg.user;
//
//
// 					isExist = true; //表示存在该用户
//
// 					//是否保存登录信息
// 					var isCheck = $(':checkbox').eq(0).prop("checked");//得到checked 的状态
// 					if(isCheck){
// 						$(".news_logintxt:eq(0)").val( $(".news_logintxt:eq(0)").val() );
// 						$(".news_logintxt:eq(1)").val( $(".news_logintxt:eq(1)").val() );
// 					}else{
// 						$(".news_logintxt:eq(0)").val("");
// 						$(".news_logintxt:eq(1)").val("");
// 					}
// 				}
// 		    }
//
// 			if (!isExist) {
// //				console.log("用户名或密码错误!");
// 				if( $(".yanzheng").val().toLowerCase()!= $('.login_list_yzm').html().toLowerCase() ){
// 					$('.login_error').html("验证码错误");
// 				}else{
// 					$('.login_error').html("用户名或密码错误!").css('color','red');
// 				}
//
// 			}
//
// 		}
// 	})
	
})
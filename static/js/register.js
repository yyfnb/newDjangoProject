

$(function(){
	
	//点击事件
	$('.register_fs span').click(function(){
	
		$(this).siblings().css({'background-position-y':'-151px','color':'black'});
		$(this).css({'background-position-y':'-102px','color':'white'});

        $('.register_tip span').siblings().css('display','none');
	    $('.register_tip span').eq($(this).index()).css('display','block');
	    
	    $("#regDiv ul").siblings().css('display','none');
	    $('#regDiv ul').eq($(this).index()).css('display','block');
	    
	    randomyzm();
	})

    $('.fasong').click(function(){
    	
    	$('.tcewm').addClass('tcewm1');
    	
    })
    $('.guanbi').click(function(){
    	$('.tcewm').removeClass('tcewm1');
    })
    
    //表单验证
    
	$(".register_list_txt").blur(function(){
		if ($(this).val() == "") { 
			$(this).siblings().css('display','block'); 
		}
	});
	//验证手机号码 
	var i = 0;
	$(".register_list_txt").eq(0).blur(function(){
		var phonereg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;
		if ( !phonereg.test( $(".register_list_txt").eq(0).val() ) ) { 
			i=0;
	        $('.register_list_tishi').eq(0).css('display','block');
			$('.register_list_tishi').eq(0).parent().find('img').remove();
		}else{
			$('.register_list_tishi').eq(0).css('display','none');
			i++;
			if(i==1){
				$('.register_list_tishi').eq(0).parent().append($("<img src='img/register_img/keyizhuce.gif' />"));
			}

		}
	})
	
	//验证密码
	var j=0;
	$(".register_list_txt").eq(2).blur(function(){
		
		var mimareg = /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{8,24})$/;
		if ( !mimareg.test( $(".register_list_txt").eq(2).val() ) ) {
			j=0;
	        $('.register_list_tishi').eq(1).css('display','block');
	        $('.register_list_tishi').eq(1).parent().find('img').remove();
		}else{
			$('.register_list_tishi').eq(1).css('display','none');
			j++;
			if(j==1){
				$('.register_list_tishi').eq(1).parent().append($("<img src='img/register_img/keyizhuce.gif' />"));
			}
			
		}
	})
	
	//验证重复密码
	var k=0;
	$(".register_list_txt").eq(3).blur(function(){
		
		if ( $(".register_list_txt").eq(3).val()!=$(".register_list_txt").eq(2).val() || $(".register_list_txt").eq(2).val()=="" ) {
			k=0;
	        $('.register_list_tishi').eq(2).css('display','block');
	        $('.register_list_tishi').eq(2).parent().find('img').remove();
		}else{
			$('.register_list_tishi').eq(2).css('display','none');
			k++;
			if(k==1){
				$('.register_list_tishi').eq(2).parent().append($("<img src='img/register_img/keyizhuce.gif' />"));
			}
			
		}
		
	})
    
    //点击注册
    $('.register_list_regree:first').click(function(){
    	console.log(i)
    	//判断是否全部输入正确
    	if(i>=1 && j>=1 && k>=1){
    		//判断是否打勾
    		var isCheck = $(':checkbox').first().prop("checked");//得到checked 的状态
	    	if(isCheck){
	    		
	    		register();
	    		
	    	}
    	}
    })

    function register(){
 		//先获取之前保存在cookie中的用户
		var users = $.cookie("users") ? JSON.parse($.cookie("users")) : [];
					
		//遍历users数组, 判断是否存在该用户,如果存在则不能注册
		for(var i=0; i<users.length; i++) {
			if ( $(".register_list_txt").eq(0).val()==users[i].name||$(".register_list_txt").eq(4).val()==users[i].name ) {
				alert("该用户已经存在, 不能注册!");
				return;
			}
		}
					
		//需要注册的用户(需要保存到cookie中的用户)
		var user = {
			name: $(".register_list_txt").eq(0).val() || $(".register_list_txt").eq(4).val(), //用户名
			pwd: $(".register_list_txt").eq(2).val() || $(".register_list_txt").eq(5).val() //密码
		}
		users.push(user); //添加新用户
					
		//保存到cookie中
		$.cookie("users", JSON.stringify(users), {expires:30, path:"/"});
		console.log( $.cookie("users") );
		if (confirm("恭喜注册成功！是否跳转到登录页面？")) {
    		//跳转代码
    		location.href = "login.html";
		}else{
			location.href = "register.html";
		}
	    		
    }
    
    //邮箱注册
    
    //验证邮箱
    var a=0;
	$(".register_list_txt").eq(4).blur(function(){
		
		var emailreg =  /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
		if ( !emailreg.test( $(".register_list_txt").eq(4).val() ) ) {
			a=0;
	        $('.register_list_tishi').eq(3).css('display','block').html("E-mail格式不正确");
	        $('.register_list_tishi').eq(3).parent().find('img').remove();
		}else{
			$('.register_list_tishi').eq(3).css('display','none');
			a++;
			if(a==1){
				$('.register_list_tishi').eq(3).parent().append($("<img src='img/register_img/keyizhuce.gif' />"));
			}
			
		}
	})
	
	//验证密码
	var b=0;
	$(".register_list_txt").eq(5).blur(function(){
		
		var mimareg = /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{8,24})$/;
		if ( !mimareg.test( $(".register_list_txt").eq(5).val() ) ) {
			b=0;
	        $('.register_list_tishi').eq(4).css('display','block');
	        $('.register_list_tishi').eq(4).parent().find('img').remove();
		}else{
			$('.register_list_tishi').eq(4).css('display','none');
			b++;
			if(b==1){
				$('.register_list_tishi').eq(4).parent().append($("<img src='img/register_img/keyizhuce.gif' />"));
			}
			
		}
	})
	
	//验证重复密码
	var c=0;
	$(".register_list_txt").eq(6).blur(function(){
		
		if ( $(".register_list_txt").eq(6).val()!=$(".register_list_txt").eq(5).val() || $(".register_list_txt").eq(5).val()=="" ) {
			c=0;
	        $('.register_list_tishi').eq(5).css('display','block');
	        $('.register_list_tishi').eq(5).parent().find('img').remove();
		}else{
			$('.register_list_tishi').eq(5).css('display','none');
			c++;
			if(c==1){
				$('.register_list_tishi').eq(5).parent().append($("<img src='img/register_img/keyizhuce.gif' />"));
			}
			
		}
		
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
       $('.register_list_yzm').html( arr.join("") );
	}
 
    $('.register_list_yzm').css('color',getRandomColor);
    //随机色
    function getRandomColor(){
    	return "#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6);
	}
    //点击刷新验证码
    $('.register_list_yzm').click(function(){
    	randomyzm();
        $('.register_list_yzm').css('color',getRandomColor);
//      console.log( $('.register_list_yzm').html() );
    })
    
    //验证验证码是否正确
    var d=0;
	$(".yanzheng").blur(function(){
		
		if ( $(".yanzheng").val().toLowerCase()!= $('.register_list_yzm').html().toLowerCase() || $(".yanzheng").val()=="" ) {
			d=0;
	        $('.register_list_tishi').eq(6).css('display','block');
	        $('.register_list_tishi').eq(6).parent().find('img').remove();
		}else{
			$('.register_list_tishi').eq(6).css('display','none');
			d++;
			if(d==1){
				$('.register_list_tishi').eq(6).parent().append($("<img src='img/register_img/keyizhuce.gif' />"));
			}
			
		}
		
	})
	
	//点击邮箱注册
    $('.register_list_regree:eq(1)').click(function(){
    	
    	//判断是否全部输入正确
    	if(a==1 && b==1 && c==1 && d==1){
    		//判断是否打勾
    		var isCheck = $(':checkbox').eq(1).prop("checked");//得到checked 的状态
	    	if(isCheck){
	    		
	    		register();
	    		
	    	}
    	}
    })
	
})

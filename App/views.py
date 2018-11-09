import hashlib
import uuid

from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect

# Create your views here.
from App.models import User, Wheel, Hanfengshishang, f_img, Tip, Cart


#首页
def index(request):
    #商品数据
    hanfengshishangs = Hanfengshishang.objects.all()
    #女装
    hanfengnv = hanfengshishangs[0:10]
    #男装
    hanfengnan = hanfengshishangs[5:10]
    #童装
    hanfengtz = hanfengshishangs[10:15]
    #副图
    fimg = f_img.objects.all()
    #标题
    tip = Tip.objects.all()
    #轮播图
    wheels = Wheel.objects.all()
    email = request.COOKIES.get("email")
    # print(wheels,hanfengshishangs)
    data ={
        'wheels':wheels,
        "hanfengnv":hanfengnv,
        "hanfengnan":hanfengnan,
        "hanfengtz":hanfengtz,
        'email':email,
        'fimg':fimg,
        "tip":tip,

    }

    return render(request,'index.html',context=data)

#注册
def register(request):
    if request.method == "GET":
        return render(request, 'register.html')
    elif request.method == "POST":

        email = request.POST.get('email')
        password = request.POST.get('password')
        # print(email,password)


        user = User()
        user.email = email
        user.password = password
        user.save()

        #重定向
        response = redirect('app:index')

        #保持状态
        response.set_cookie('email',email)

        return redirect('app:index')
# 密码
# def generate_password(password):
#     sha = hashlib.sha512()
#     sha.update(password.encode('utf-8'))
#     return sha.hexdigest()
# 登录
def login(request):
    if request.method == "GET":
        return render(request,'login.html')
    elif request.method == "POST":
        email = request.POST.get('email')
        password = request.POST.get('password')

        users = User.objects.filter(email = email,password=password)
        if users.exists():
            user = users.first()

            #重定向
            response = redirect('app:index')

            #设置cookie
            response.set_cookie('email',user.email)

            return response
        else:
            return HttpResponse('用户名或密码错误!')
# def login(request):
#     if request.method == "GET":
#         return render(request,'login.html')
#     elif request.method == "POST":
#         email = request.POST.get('email')
#         password = request.POST.get('password')
#         try:
#             user = User.objects.get(email=email)
#             if user.password != generate_password(password):# 密码错误
#                 return render(request,'index.html',context={'error':'密码错误!'})
#             # 登录成功
#             # 更新token
#             else:
#                 user.token = str(uuid.uuid5(uuid.uuid4(),'login'))
#                 user.save()
#         # 状态保持
#                 request.session['token'] = user.token
#                 return redirect('app:index')
#         except:
#             return render(request,'login.html',context={'error':'用户名有误，请检查后输入!'})







#购物车
def cart(request):
    # 获取数据
    email = request.COOKIES.get("email")


    if email:
        user = User.objects.get(email=email)
        carts = Cart.objects.filter(user=user).exclude(number=0)
        data = {

            'email': email,
            'carts':carts,

        }



        return render(request,'cart.html',context=data)
    else:
        return redirect('app:login')

#详情页
def goodsinfo(request,id):
    good = Hanfengshishang.objects.get(id=id)
    email = request.COOKIES.get("email")



    return render(request,'goodsinfo.html',context={'good':good,"email":email})
    # return  render(request,'goodsinfo.html')


def addcart(request):
    num = request.GET.get('number')
    goodsid = request.GET.get('goodsid')
    email = request.COOKIES.get('email')
    print(num)
    responseData = {
        'msg': '添加购物车成功',
        'status': 1  # 1标识添加成功，0标识添加失败，-1标识未登录
    }
    if email:
        user = User.objects.get(email=email)
        goods = Hanfengshishang.objects.get(pk = goodsid)

        carts = Cart.objects.filter(user=user).filter(goods=goods)
        if carts.exists():
            cart = carts.first()
            cart.number = cart.number + int(num)
            cart.save()
            responseData['number'] = cart.number
        else:
            cart = Cart()
            cart.user = user
            cart.goods = goods
            cart.number = num
            cart.save()
            responseData['number'] = cart.number
        return JsonResponse(responseData)




# def subcart(request):
#     return None
def delcart(request):
    # 获取数据
    email = request.COOKIES.get('email')
    goodsid = request.GET.get('goodsid')
    print(goodsid)
    # 对应用户 和 商品
    user = User.objects.get(email=email)
    goods = Hanfengshishang.objects.get(pk = goodsid)

    # 删减操作
    carts = Cart.objects.filter(user=user).filter(goods=goods)
    cart = carts.first()
    cart.delete()

    responseData = {
        'msg': '购物车减操作成功',
        'status': 1,
        'number': cart.number
    }
    return JsonResponse(responseData)
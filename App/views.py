import hashlib
import uuid

from django.http import HttpResponse
from django.shortcuts import render, redirect

# Create your views here.
from App.models import User, Wheel, Hanfengshishang, f_img, Tip


def index(request,id=1):
    hanfengshishangs = Hanfengshishang.objects.all()
    hanfengnv = hanfengshishangs[0:10]
    hanfengnan = hanfengshishangs[5:10]
    hanfengtz = hanfengshishangs[10:15]
    fimg = f_img.objects.all()
    tip = Tip.objects.all()
    wheels = Wheel.objects.all()
    email = request.COOKIES.get("email")
    print(wheels,hanfengshishangs)
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
        print(email,password)


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
def generate_password(password):
    sha = hashlib.sha512()
    sha.update(password.encode('utf-8'))
    return sha.hexdigest()
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








def cart(request):
    email = request.COOKIES.get("email")
    data = {

        'email': email

    }
    return render(request,'cart.html',context=data)


def goodsinfo(request):
    return render(request,'goodsinfo.html')
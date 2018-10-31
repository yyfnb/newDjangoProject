from django.http import HttpResponse
from django.shortcuts import render, redirect

# Create your views here.
from App.models import User


def index(request):
    email = request.COOKIES.get("email")
    return render(request,'index.html',context={'email':email})


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
        return response
    return render(request, 'register.html')

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



def cart(request):
    return render(request,'cart.html')
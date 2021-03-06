from django.conf.urls import url

from App import views

urlpatterns = [
    # 首页
    url(r'^$',views.index,name='index'),
    # 注册
    url(r'^register/$',views.register,name='register'),
    # 登录
    url(r'^login/$',views.login,name='login'),
    # 购物车
    url(r'^cart/$',views.cart,name='cart'),
    # 商品详情
    url(r'^goodsinfo/(\d+)/$',views.goodsinfo,name='goodsinfo'),
    # url(r'^goodsinfo/$',views.goodsinfo,name='goodsinfo')
    #     添加购物车
    url(r'^addcart/$', views.addcart, name='addcart'),
    #     购物车减
    url(r'^delcart/$',views.delcart,name='delcart'),
    url(r'^generateorder/$', views.generateorder, name='generateorder'),    # 下单
    url(r'^orderinfo/(\d+)/$', views.orderinfo, name='orderinfo'), #订单信息

]
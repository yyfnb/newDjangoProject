from django.conf.urls import url

from App import views

urlpatterns = [
    url(r'^$',views.index,name='index'),
    url(r'^register/$',views.register,name='register'),
    url(r'^login/$',views.login,name='login'),
    url(r'^cart/$',views.cart,name='cart'),
    url(r'^goodsinfo/(\d+)/$',views.goodsinfo,name='goodsinfo'),
# url(r'^goodsinfo/$',views.goodsinfo,name='goodsinfo')
]
from django.db import models

# Create your models here.

class User(models.Model):
    email = models.CharField(max_length=256)
    password = models.CharField(max_length=256)

class Wheel(models.Model):
    img = models.CharField(max_length=256)
    word = models.CharField(max_length=100)

class Hanfengshishang(models.Model):
    img = models.CharField(max_length=256)
    price = models.IntegerField()
    del_price = models.IntegerField()
    buy = models.CharField(max_length=30)

class f_img(models.Model):
    s_img_img = models.CharField(max_length=256)
    fl_img = models.CharField(max_length=256)
    fl_img21 = models.CharField(max_length=256)
    fl_img22 = models.CharField(max_length=256)

class Tip(models.Model):
    H_list = models.CharField(max_length=30)
    s_cate1 = models.CharField(max_length=30)


class Cart(models.Model):
    # user
    user = models.ForeignKey(User)
    # goods
    goods = models.ForeignKey(Hanfengshishang)
    # number
    number = models.IntegerField()
    # isselect
    isselect = models.BooleanField(default=True)
#     size
    size = models.CharField(max_length=10)


# 订单
# 一个用户 对应 多个订单
# 在从表这声明关系
class Order(models.Model):
    # 用户
    user = models.ForeignKey(User)
    # 创建时间
    createtime = models.DateTimeField(auto_now_add=True)
    # 状态
    # -1 过期
    # 1 未付款
    # 2 已付款，未发货
    # 3 已发货，快递
    # 4 已签收，未评价
    # 5 已评价
    # 6 退款....
    status = models.IntegerField(default=1)
    # 订单号
    identifier = models.CharField(max_length=256)

# 订单商品
# 一个订单 对应 多个商品
# 在从表中声明关系
class OrderGoods(models.Model):
    # 订单
    order = models.ForeignKey(Order)
    # 商品
    goods = models.ForeignKey(Hanfengshishang)
    # 个数
    number = models.IntegerField(default=1)

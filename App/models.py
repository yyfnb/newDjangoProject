from django.db import models

# Create your models here.

class User(models.Model):
    email = models.CharField(max_length=256)
    password = models.CharField(max_length=30)

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
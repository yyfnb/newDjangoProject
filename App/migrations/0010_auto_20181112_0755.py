# -*- coding: utf-8 -*-
# Generated by Django 1.11.11 on 2018-11-12 07:55
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('App', '0009_cart_size'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cart',
            name='size',
            field=models.CharField(max_length=10),
        ),
    ]

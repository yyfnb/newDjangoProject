# -*- coding: utf-8 -*-
# Generated by Django 1.11.11 on 2018-11-12 04:49
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('App', '0008_order_ordergoods'),
    ]

    operations = [
        migrations.AddField(
            model_name='cart',
            name='size',
            field=models.CharField(default=1, max_length=10),
        ),
    ]

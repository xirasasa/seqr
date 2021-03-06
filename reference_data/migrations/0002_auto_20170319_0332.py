# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-03-19 03:32
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('reference_data', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='gencodegene',
            name='gencode_release',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='reference_data.GencodeRelease'),
        ),
        migrations.AlterField(
            model_name='gencodetranscript',
            name='gencode_release',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='reference_data.GencodeRelease'),
        ),
    ]

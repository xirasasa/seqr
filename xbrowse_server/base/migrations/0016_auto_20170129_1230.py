# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-01-29 17:30
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0015_merge_20170129_1227'),
    ]

    operations = [
        migrations.AddField(
            model_name='individual',
            name='created_date',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
        migrations.AlterField(
            model_name='individual',
            name='case_review_status',
            field=models.CharField(blank=True, choices=[(b'U', b'Uncertain'), (b'A', b'Accepted: Platform Uncertain'), (b'E', b'Accepted: Exome'), (b'G', b'Accepted: Genome'), (b'R', b'Not Accepted'), (b'H', b'Hold'), (b'Q', b'More Info Needed')], default=b'', max_length=1, null=True),
        ),
    ]

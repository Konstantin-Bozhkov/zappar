# Generated by Django 2.2.5 on 2019-09-29 20:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='randomuser',
            name='nat',
            field=models.CharField(default='AU', max_length=255),
        ),
    ]

# Generated by Django 3.1.4 on 2020-12-12 16:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("window", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="window",
            name="state",
            field=models.BooleanField(default=False, verbose_name="state"),
        ),
    ]

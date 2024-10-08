# Generated by Django 5.1 on 2024-08-28 20:44

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Sales_Data',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('order_id', models.CharField(max_length=100)),
                ('sku', models.CharField(max_length=100)),
                ('type', models.CharField(max_length=50)),
                ('region', models.CharField(max_length=50)),
                ('channel', models.CharField(max_length=100)),
                ('fulfillment_channel', models.CharField(max_length=50)),
                ('quantity', models.IntegerField()),
            ],
        ),
    ]

from django.db import models

# Create your models here.

class Sales_Data(models.Model):
    date = models.DateField()
    order_id = models.CharField(max_length=100)
    sku = models.CharField(max_length=100)
    type = models.CharField(max_length=50)
    region = models.CharField(max_length=50)
    channel = models.CharField(max_length=100)
    fulfillment_channel = models.CharField(max_length=50)
    quantity = models.IntegerField()

    def __str__(self):
        return f"Sales Data {self.order_id} - {self.sku}"
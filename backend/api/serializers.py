from rest_framework import serializers
from .models import Sales_Data

class SalesDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sales_Data
        fields = '__all__'

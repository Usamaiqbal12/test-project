from django.shortcuts import render
from rest_framework import viewsets
from .models import Sales_Data
from .serializers import SalesDataSerializer
# Create your views here.



class SalesDataViewSet(viewsets.ModelViewSet):
    queryset = Sales_Data.objects.all()
    serializer_class = SalesDataSerializer

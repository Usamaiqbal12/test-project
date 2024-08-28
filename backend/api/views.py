from django.shortcuts import render
from rest_framework import viewsets
from .models import Sales_Data
from .serializers import SalesDataSerializer
from rest_framework.permissions import IsAuthenticated

# Create your views here.



class SalesDataViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]

    queryset = Sales_Data.objects.all()
    serializer_class = SalesDataSerializer

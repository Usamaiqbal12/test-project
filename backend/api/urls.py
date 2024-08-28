from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SalesDataViewSet

# Correctly register the ViewSet with the router
router = DefaultRouter()
router.register(r'sales-data', SalesDataViewSet, basename='sales-data')

urlpatterns = [
    path('', include(router.urls)),
]

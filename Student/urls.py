from django.contrib import admin
from django.urls import path
from django.urls import include
from . import views
from .views import index

urlpatterns = [

 path('student', index),
]
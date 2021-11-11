from django.conf.urls import url
from django.urls import path
from .views import index, redirect

# Holds the URL path for the application
urlpatterns = [
    path('', redirect),
    path('welcome', index),  # This is the path for home
    path('student', index),
    path('recruiter', index),
    path('register', index),
    path('login', index),
    path('student/header', index),

]

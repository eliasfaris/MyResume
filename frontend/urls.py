from django.conf.urls import url
from django.urls import path
from .views import index, redirect

# Holds the URL path for the application
urlpatterns = [
    path('', redirect), # This is the path for home
    path('student', index),
    path('register', index),
    path('login', index),
    path('student/header', index),
    path('student/education', index),
    path('student/abilities', index),
    path('student/', index),
    path('student/projects', index),
    path('student/professional', index),
    path('student/volunteer', index),
    path('recruiter', index),
]

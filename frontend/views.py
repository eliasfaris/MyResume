from django.http.response import HttpResponseRedirect
from django.shortcuts import render
# Create your views here.


def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html')


def redirect(request):
    return HttpResponseRedirect("/login")

from django.http.response import HttpResponseRedirect
from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.


def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html')


def redirect(request):
    return HttpResponseRedirect("/welcome")

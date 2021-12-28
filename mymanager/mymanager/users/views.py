from django.shortcuts import render
from django.shortcuts import get_object_or_404, render
from django.http import HttpResponse
from django.core.serializers import serialize
from .models import Users
from django.views import generic

def list_users(request):
    users = Users.objects.all()
    
    if(len(users) == 0): 
        return HttpResponse([])
    users = serialize('json', users)
    return HttpResponse(users)

def user(request, pk):
    user = Users.objects.filter(id=pk)
    print ("user", user)
    # if(len(user) == 0): 
    #     return HttpResponse([])
    user = serialize('json', user)
    return HttpResponse(user)
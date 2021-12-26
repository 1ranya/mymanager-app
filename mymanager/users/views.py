from django.shortcuts import render
from django.shortcuts import get_object_or_404, render
from django.http import HttpResponse
from .models import Users

def list_users(request, user_id):
    user = Users.objects.all()
    
    if(len(user) == 0): 
        return HttpResponse([])
    return HttpResponse(user)
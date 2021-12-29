from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    path('users/', views.users_list, name='users'),
    path('user/<int:pk>/', views.user_detail, name='user'),
]
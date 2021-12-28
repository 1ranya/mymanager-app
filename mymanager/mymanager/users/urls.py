from django.urls import path
from . import views

urlpatterns = [
    # path('', views.index, name='index'),
    path('users/', views.list_users, name='users'),
    path('user/<int:pk>/', views.user, name='user')
    # path('/payments', views.Payments, name='index')
]
# from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Users

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Users
        fields = ['id', 'first_name', 'last_name', 'adresse',
                    'position', 'cin', 'securite_sociale', 'email', 
                    'start_date', 'is_admin', 'is_intern', 'contract', 
                    'phone', 'salary']


# class GroupSerializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = Group
#         fields = ['url', 'name']
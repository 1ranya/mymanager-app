from django.contrib import admin
from .models import Users

# admin.site.register(Users)
@admin.register(Users)
class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'first_name', 'last_name', 'adresse',
                    'position', 'cin', 'securite_sociale', 'email', 
                    'start_date', 'is_admin', 'is_intern', 'contract', 
                    'phone', 'salary',
                    )
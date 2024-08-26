from django.contrib import admin

from .models import UsersFormsModel


@admin.register(UsersFormsModel)
class UserFormsAdmin(admin.ModelAdmin):
    list_display = ['name']
    search_fields = ['name']

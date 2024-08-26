from django.contrib import admin

from .forms import CaseForm
from .models import Case


@admin.register(Case)
class Case(admin.ModelAdmin):
    list_display = ['project_name']
    list_filter = ['project_name']
    form = CaseForm
    readonly_fields = ('slug',)

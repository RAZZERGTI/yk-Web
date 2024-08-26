from django.urls import path

from . import views

urlpatterns = [
    path('<str:language>', views.GetAllCases.as_view(), name='cases'),
    path('<str:language>/<str:slug>', views.GetCaseData.as_view(), name='cases'),
]

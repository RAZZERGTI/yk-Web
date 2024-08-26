from django.urls import path

from . import views

urlpatterns = [
    path('send-data/', views.SendData.as_view(), name='send-data'),
]

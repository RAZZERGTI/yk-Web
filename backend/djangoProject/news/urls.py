from django.urls import path

from . import views

urlpatterns = [

    path('<str:language>/', views.GetNews.as_view(), name='GetNews')

]

from django.urls import path

from .views import GetReviewsByLanguage

urlpatterns = [
    path('<str:language>', GetReviewsByLanguage.as_view(), name='cases-by-language'),
]

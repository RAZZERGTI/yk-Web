from django.contrib import admin
from django.urls import path, include

api_urls = [
    path('cases/', include('cases.urls')),
    path('reviews/', include('reviews.urls')),
    path('consultation/', include('send_data_form.urls')),
]

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(api_urls)),
    path("ckeditor5/", include('django_ckeditor_5.urls')),
]

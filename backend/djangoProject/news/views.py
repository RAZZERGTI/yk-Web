from rest_framework.response import Response
from rest_framework.views import APIView

from .models import New
from .serializer import NewsSerializer


# Create your views here.

class GetNews(APIView):
    def get(self, request, language):
        news_data = New.objects.filter(language=language)
        serializer = NewsSerializer(news_data, many=True)
        return Response(serializer.data, status=200)

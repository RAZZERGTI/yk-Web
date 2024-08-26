from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Review
from .serializer import ReviewsSerializer


class GetReviewsByLanguage(APIView):
    def get(self, request, language):
        if language is None:
            return Response({'status': 'error'})

        get_reviews = Review.objects.filter(language=language)
        serializer = ReviewsSerializer(get_reviews, many=True)
        return Response(serializer.data, status=status.HTTP_202_ACCEPTED)

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Case
from .serializers import CaseSerializer


class GetAllCases(APIView):
    def get(self, request, language):
        if language is None:
            return Response({'status': 'error'}, status=status.HTTP_400_BAD_REQUEST)
        all_cases = Case.objects.filter(language=language)
        serializer = CaseSerializer(all_cases, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class GetCaseData(APIView):
    def get(self, request, language, slug):
        if language and slug:
            cases = Case.objects.filter(language=language, slug=slug)
            serializer = CaseSerializer(cases, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({'status': 'error'}, status=status.HTTP_400_BAD_REQUEST)

from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Partner
from .serializer import PartnerSerializer


class PartnersView(APIView):
    def get(self, request, language):
        partners = Partner.objects.filter(language=language)
        serializer = PartnerSerializer(partners, many=True)
        return Response(serializer)

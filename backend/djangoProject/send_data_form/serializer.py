from rest_framework import serializers

from .models import UsersFormsModel


class UserFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = UsersFormsModel
        fields = '__all__'

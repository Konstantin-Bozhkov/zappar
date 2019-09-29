from rest_framework import serializers
from backend.api.models import RandomUser


class RandomUsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = RandomUser
        fields = ['gender', 'nat', 'title', 'fname', 'lname', 'phone', 'email']
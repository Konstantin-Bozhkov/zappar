from rest_framework.generics import CreateAPIView

from backend.api.serializers import RandomUsersSerializer

class CreateUser(CreateAPIView):
    serializer_class = RandomUsersSerializer

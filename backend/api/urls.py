from django.urls import path
from django.urls import reverse

from .views import CreateUser

urlpatterns = [
    path('users', CreateUser.as_view(), name='create-users'),
]
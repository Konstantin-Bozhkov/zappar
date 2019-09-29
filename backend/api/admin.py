from django.contrib import admin
from django import forms
from .models import RandomUser

class RandomUsersAdmin(admin.ModelAdmin):
    list_display = ('gender','nat','title','fname','lname','phone','email')

admin.site.register(RandomUser, RandomUsersAdmin)

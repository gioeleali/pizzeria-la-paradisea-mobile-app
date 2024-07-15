from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('csrf/', views.get_csrf_token),
    path('users/', views.users, name='users'),
    path('register/', views.api_register, name='api_register'),
    path('login/', views.api_login, name='api_login'),
]
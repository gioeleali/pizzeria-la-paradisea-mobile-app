from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('csrf/', views.get_csrf_token),
    path('users/', views.users, name='users'),
    path('register/', views.register, name='register'),
    path('login/', views.login, name='login'),
    path('cart/', views.cart, name='cart'),
]
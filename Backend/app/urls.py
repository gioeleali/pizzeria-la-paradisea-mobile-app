from django.contrib import admin
from django.urls import path
from . import views
from rest_framework import routers

# router= routers.DefaultRouter()
# router.register(r"users", views.registra_utente)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('register/', views.registra_utente, name='register'),
    path('login/', views.login_user, name='login'),
    path('', views.home, name='home'),
    path('users/', views.users_list, name='users_list'),
]

# urlpatterns += router.urls
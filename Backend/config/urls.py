from django.contrib import admin
from django.urls import include, path
from .views import home
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home, name='home'),
    path('app/', include('app.urls')),
    path('register/', views.register, name='register'),
    path('users/', views.user_list, name='user_list'),
]

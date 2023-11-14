from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import User
from .serializers import UserSerializer

@api_view(['POST'])
def register(request):
    """
    Handle user registration.
    """
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

def user_list(request):
    """
    Display a list of registered users.
    """
    users = User.objects.all()
    return render(request, 'user_list.html', {'users': users})

def home(request):
    return HttpResponse("Home Page")
from django.shortcuts import render
from . import models
from rest_framework.response import Response
from rest_framework.decorators import api_view
from . import serializers
from django.shortcuts import render
from .models import User

def home(request):
    return render(request, 'home.html')

def users_list(request):
    users = User.objects.all()
    return render(request, 'users_list.html', {'users': users})

@api_view(['POST'])
def registra_utente(request):
    datas =  serializers.UserSerializer(data=request.data)
    print(request.data.get("nome"))
    if request.data is not None: 
        user =  models.User.objects.create(nome= request.data.get("nome"), cognome= request.data.get("cognome"), email= request.data.get("email"), password= request.data.get("password"))
        return Response({"user":"created succesfully"})
    else:
        return Response({"message": "invalid username"})

@api_view(['GET'])
def login_user(request):
    datas= request.data
    print(datas)
    if request.data is not None:
        user = models.User.objects.get(email=datas.get("email"),)
        print(user.password)
        if datas.get("password") == user.password:
            return Response({"user":"found user"})
        else:
            return Response({"user": "user not found"})
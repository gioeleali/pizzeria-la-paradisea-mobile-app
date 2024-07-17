from django.shortcuts import render, redirect
from .models import User
from django.middleware.csrf import get_token
from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.middleware.csrf import get_token
from .models import User
from .forms import RegistrazioneForm
import json
from django.utils import timezone
from .models import Order, OrderItem

def get_csrf_token(request):
    token = get_token(request)
    return JsonResponse({'csrfToken': token})

@csrf_exempt
def register(request):
    if request.method == 'GET':
        return render(request, 'register.html')
    elif request.method == 'POST':
        try:
            data = json.loads(request.body)
            form = RegistrazioneForm(data)
            if form.is_valid():
                user = form.save()
                return JsonResponse({'success': True, 'message': 'User registered successfully'}, status=201)
            else:
                return JsonResponse({'success': False, 'errors': form.errors}, status=400)
        except json.JSONDecodeError:
            return JsonResponse({'success': False, 'message': 'Invalid JSON'}, status=400)
        except Exception as e:
            return JsonResponse({'success': False, 'message': str(e)}, status=400)
    return JsonResponse({'success': False, 'message': 'Invalid request method'}, status=405)

@csrf_exempt
def login(request):
    if request.method == 'GET':
        return render(request, 'login.html')
    elif request.method == 'POST':
        data = json.loads(request.body)
        email = data.get('email')
        password = data.get('password')
        user = authenticate(request, username=email, password=password)
        if user is not None:
            login(request, user)
            return JsonResponse({'success': True, 'message': 'Login successful'}, status=200)
        else:
            return JsonResponse({'success': False, 'message': 'Invalid credentials'}, status=401)
    return JsonResponse({'success': False, 'message': 'Invalid request method'}, status=405)

def home(request):
    return render(request, 'home.html')

def users(request):
    users = User.objects.all()
    return render(request, 'users.html', {'users': users})

@csrf_exempt
def cart(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        
        # Estrarre il nome della persona dal payload JSON
        # Supponiamo che il nome sia incluso nel payload come 'customer_name'
        customer_name = data.get('customer_name', 'Anonimo')
        
        # Creare un nuovo ordine
        order = Order.objects.create(
            customer_name=customer_name,
            date=timezone.now()
        )
        
        # Aggiungere gli articoli all'ordine
        for item in data.get('cartItems', []):
            OrderItem.objects.create(
                order=order,
                name=item['name'],
                price=float(item['price'].replace('€', ''))
            )
        
        return JsonResponse({"message": "Ordine ricevuto con successo", "order_id": order.id}, status=200)
    
    elif request.method == 'GET':
        # Recuperare tutti gli ordini
        orders = Order.objects.all().order_by('-date')
        
        context = {
            'orders': orders
        }
        
        return render(request, 'cart.html', context)
    
    else:
        return JsonResponse({"error": "Metodo non consentito"}, status=405)
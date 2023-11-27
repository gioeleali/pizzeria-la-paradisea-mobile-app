from django.shortcuts import render
from .forms import RegistrazioneForm

def registra_utente(request):
    if request.method == 'POST':
        form = RegistrazioneForm(request.POST)
        if form.is_valid():
            form.save()
            return render(request, 'register_success.html')
    else:
        form = RegistrazioneForm()
    return render(request, 'register.html', {'form': form})
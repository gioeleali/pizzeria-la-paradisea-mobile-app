from django import forms
from .models import User

class RegistrazioneForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ['nome', 'cognome', 'email', 'password']
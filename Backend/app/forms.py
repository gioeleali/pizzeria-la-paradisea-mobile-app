from django import forms
from .models import register

class RegistrazioneForm(forms.ModelForm):
    class Meta:
        model = register
        fields = ['nome', 'cognome', 'email', 'password']
        widgets = {
            'password': forms.PasswordInput(),
        }
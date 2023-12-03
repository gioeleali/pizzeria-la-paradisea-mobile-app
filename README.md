![Banner Bombify](https://github.com/gioeleali/Bombify/blob/main/Frontend/assets/png/home.webp)

# Bombify

Bombify è una piattaforma mobile per la gestione della vendita di bomboloni. L'app include sezioni per informazioni, acquisti, gestione delle impostazioni personali e un'area account con una futura integrazione di una carta fedeltà.

## Indice

- [Requisiti di Sistema](#requisiti-di-sistema)
- [Configurazione dell'Ambiente di Sviluppo](#configurazione-dellambiente-di-sviluppo)
  - [Installazione di Node.js](#installazione-di-nodejs)
  - [Installazione Python 3](#installazione-python-3)
  - [Installazione JDK (Java Development Kit)](#installazione-jdk-java-development-kit)
  - [Installazione Android Studio](#installazione-android-studio)
  - [Installazione Git](#installazione-git)
- [Esecuzione del Progetto](#esecuzione-del-progetto)
  - [Avvio del Frontend](#avvio-del-frontend)
  - [Configurazione del Backend](#configurazione-del-backend)
    - [Creazione e Attivazione dell'Ambiente Virtuale](#creazione-e-attivazione-dellambiente-virtuale)
    - [Installazione di Django e Django REST framework](#installazione-di-django-e-django-rest-framework)
    - [Migrazioni del Database e Avvio del Server Django](#migrazioni-del-database-e-avvio-del-server-django)

## Requisiti di Sistema

- Node.js
- Python 3
- JDK (Java Development Kit)
- Android Studio
- Git

## Configurazione dell'Ambiente di Sviluppo

### Frontend React Native

#### Installazione di Node.js
Per sviluppare l'applicazione frontend in React Native, è necessario installare Node.js. Ecco i passaggi per l'installazione:

1. Scaricare Node.js:
   - Vai al sito web ufficiale di [Node.js](https://nodejs.org/).
   - Scegli e scarica la versione raccomandata per la maggior parte degli utenti.
   - Se sei su Windows, puoi scaricare l'installer (.msi), mentre su macOS puoi scaricare il pacchetto (.pkg).

2. Installazione:
   - **Windows**: Esegui l'installer scaricato e segui le istruzioni.
   - **macOS**: Apri il pacchetto scaricato e segui il processo guidato di installazione.
   - **Linux**: Puoi installare Node.js tramite il gestore pacchetti della tua distribuzione. Ad esempio, su Ubuntu, puoi utilizzare il comando: `sudo apt-get install nodejs`.

3. Verifica dell'installazione:
   - Apri il terminale o il prompt dei comandi.
   - Digita `node -v` per verificare la versione di Node.js installata.
   - Digita `npm -v` per verificare la versione di npm (Node Package Manager) installata.

4. Aggiornamento di npm (opzionale):
   - Per assicurarti di avere l'ultima versione di npm, esegui `npm install -g npm` nel terminale.

#### Installazione Python 3

Python è necessario per il backend Django del progetto. Ecco come installarlo:

1. Scaricare Python:
   - Visita il sito ufficiale di [Python](https://www.python.org/downloads/).
   - Scegli e scarica l'ultima versione di Python 3 per il tuo sistema operativo.

2. Installazione:
   - **Windows/Linux/macOS**: Esegui l'installer scaricato e segui le istruzioni. Assicurati di selezionare l'opzione per aggiungere Python al PATH.

3. Verifica dell'installazione:
   - Apri il terminale o il prompt dei comandi.
   - Digita `python --version` per confermare che Python è stato installato correttamente.

#### Installazione JDK (Java Development Kit)

Il JDK è essenziale per lo sviluppo Android con React Native.

1. Scaricare JDK:
   - Vai alla pagina di [Oracle JDK](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html) o [AdoptOpenJDK](https://adoptopenjdk.net/).
   - Scegli e scarica la versione appropriata per il tuo sistema operativo.

2. Installazione:
   - Segui il processo di installazione guidato dopo aver scaricato il JDK.

3. Configurazione dell'ambiente:
   - Aggiungi il percorso dell'installazione del JDK alle variabili d'ambiente del tuo sistema.

#### Installazione Android Studio

Android Studio fornisce l'ambiente di sviluppo integrato (IDE) per lo sviluppo Android.

1. Scaricare Android Studio:
   - Visita il sito ufficiale di [Android Studio](https://developer.android.com/studio).
   - Scarica la versione più recente per il tuo sistema operativo.

2. Installazione:
   - Esegui l'installer scaricato e segui le istruzioni per completare l'installazione.
   - Durante l'installazione, assicurati di selezionare le seguenti opzioni:
     - `Android SDK Platform`
     - `Android Virtual Device`

3. Configurazione post-installazione:
   - Al termine dell'installazione, avvia Android Studio.
   - Completa la configurazione guidata e assicurati di installare l'`Android SDK Platform 33`.
   - Scegli tra `Intel x86 Atom_64 System Image` o `Google APIs Intel x86 Atom System Image` per le immagini del sistema.

#### Installazione Git

Git è un sistema di controllo versione indispensabile per la gestione del codice sorgente.

1. Scaricare Git:
   - Visita [Git SCM](https://git-scm.com/downloads).
   - Scarica la versione più recente per il tuo sistema operativo.

2. Installazione:
   - Esegui l'installer scaricato e segui le istruzioni.
   - Durante l'installazione, scegli le opzioni che meglio si adattano al tuo ambiente di sviluppo.

3. Verifica dell'installazione:
   - Apri il terminale o il prompt dei comandi.
   - Digita `git --version` per confermare che Git è stato installato correttamente.
  
### Esecuzione del Progetto

Dopo aver configurato l'ambiente di sviluppo, segui questi passaggi per eseguire il progetto:

#### Avvio del Frontend

1. Apertura del Terminale:
   - Apri un terminale o un prompt dei comandi sul tuo computer.

2. Navigazione nella Cartella del Frontend:
   - Utilizza il comando `cd Frontend` per spostarti nella cartella del frontend del progetto.

3. Installazione delle Dipendenze:
   - Esegui `npm install` per installare tutte le dipendenze necessarie al progetto.

4. Avvio dell'Applicazione:
   - Una volta completata l'installazione delle dipendenze, esegui `npm start` per avviare il frontend dell'applicazione.

Segui queste istruzioni per avviare il frontend del tuo progetto Bombify. Assicurati che tutti i passaggi di installazione e configurazione siano stati completati correttamente prima di procedere con l'esecuzione del progetto.

#### Configurazione del Backend

Prima di eseguire il backend, è importante configurare un ambiente virtuale Python. Questo permette di isolare le dipendenze del progetto, evitando conflitti con altre installazioni Python sul sistema e facilitando la gestione delle librerie specifiche del progetto.

1. Creazione dell'Ambiente Virtuale:
   - Apri un terminale o un prompt dei comandi.
   - Naviga alla cartella del backend del progetto.
   - Esegui `python -m venv nome_ambiente` per creare un nuovo ambiente virtuale. `nome_ambiente` può essere sostituito con il nome che preferisci per il tuo ambiente virtuale.

2. Attivazione dell'Ambiente Virtuale:
   - **Windows**: Esegui `nome_ambiente\Scripts\activate`.
   - **macOS/Linux**: Esegui `source nome_ambiente/bin/activate`.
   - Noterai che il nome dell'ambiente virtuale apparirà nel prompt, indicando che è attivo.

3. Installazione di Django e Django REST framework:
   - Con l'ambiente virtuale attivo, installa Django eseguendo `pip install django`.
   - Installa Django REST framework con `pip install djangorestframework`.

Dopo aver configurato l'ambiente virtuale e installato le dipendenze necessarie, sei pronto per eseguire il backend del progetto Bombify.

Dopo aver configurato l'ambiente virtuale e installato le dipendenze necessarie, segui questi passaggi per avviare il backend di Bombify:

1. Migrazioni del Database:
   - Assicurati che l'ambiente virtuale sia attivo.
   - Esegui `python manage.py makemigrations` per preparare le migrazioni del database.
   - Poi, esegui `python manage.py migrate` per applicare le migrazioni al database.

2. Avvio del Server Django:
   - Avvia il server backend con il comando `python manage.py runserver`.
   - Il server si avvierà tipicamente all'indirizzo `http://127.0.0.1:8000/`.
   - Naviga a questo indirizzo nel tuo browser per verificare che il server sia attivo e funzionante.
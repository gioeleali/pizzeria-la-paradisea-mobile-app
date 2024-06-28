# Pizzeria La Paradisea

**Bombify** is an innovative and intuitive mobile platform, specifically designed to transform the experience of selling and buying doughnuts. This sleek and user-friendly app is equipped with a wide range of features for both doughnut sellers and buyers.

With Bombify, sellers can easily manage their inventory, set prices, promotions, and provide real-time updates on product availability. Users can browse through a variety of flavors and options, make purchases with just a few taps, and receive notifications for new arrivals or special offers.

### Key Features:
- Product Information and Details: Each doughnut is presented with appetizing details and high-quality images.
- Simplified Purchases: An intuitive user interface makes the doughnut purchasing experience smooth and enjoyable.
- Personal Management: Users can customize settings, manage their orders, and track their preferences.
- Account Area: A dedicated section where users can view their purchase history and manage their personal data.
- Digital Loyalty Card (coming soon): A feature in development that will reward regular customers with exclusive discounts and offers.

Bombify is not just an app; it's a community for doughnut lovers, a place where passion for these treats meets the convenience of mobile technology. Whether you are an artisan baker or a doughnut enthusiast, Bombify is here to make every bite of doughnut even sweeter!

## Table of Contents

- [System Requirements](#system-requirements)
- [Development Environment Setup](#development-environment-setup)
  - [Node.js Installation](#nodejs-installation)
  - [Python 3 Installation](#python-3-installation)
  - [JDK (Java Development Kit) Installation](#jdk-java-development-kit-installation)
  - [Android Studio Installation](#android-studio-installation)
  - [Git Installation](#git-installation)
- [Project Execution](#project-execution)
  - [Frontend Start-up](#frontend-start-up)
  - [Backend Configuration](#backend-configuration)
    - [Creating and Activating the Virtual Environment](#creating-and-activating-the-virtual-environment)
    - [Installing Django and Django REST framework](#installing-django-and-django-rest-framework)
    - [Database Migrations and Django Server Start-up](#database-migrations-and-django-server-start-up)

## System Requirements

- Node.js
- Python 3
- JDK (Java Development Kit)
- Android Studio
- Git

## Development Environment Setup

### Frontend React Native

#### Node.js Installation
To develop the React Native frontend application, it is necessary to install Node.js. Here are the steps for installation:

1. Download Node.js:
   - Go to the official [Node.js website](https://nodejs.org/).
   - Choose and download the version recommended for most users.
   - If you are on Windows, you can download the installer (.msi), while on macOS you can download the package (.pkg).

2. Installation:
   - **Windows**: Run the downloaded installer and follow the instructions.
   - **macOS**: Open the downloaded package and follow the guided installation process.
   - **Linux**: You can install Node.js via your distribution's package manager. For example, on Ubuntu, you can use the command: `sudo apt-get install nodejs`.

3. Installation Verification:
   - Open the terminal or command prompt.
   - Type `node -v` to verify the installed version of Node.js.
   - Type `npm -v` to verify the version of npm (Node Package Manager) installed.

4. npm Update (optional):
   - To ensure you have the latest version of npm, run `npm install -g npm` in the terminal.

#### Python 3 Installation

Python is necessary for the Django backend of the project. Here's how to install it:

1. Download Python:
   - Visit the official [Python website](https://www.python.org/downloads/).
   - Choose and download the latest version of Python 3 for your operating system.

2. Installation:
   - **Windows/Linux/macOS**: Run the downloaded installer and follow the instructions. Make sure to select the option to add Python to PATH.

3. Installation Verification:
   - Open the terminal or command prompt.
   - Type `python --version` to confirm that Python has been installed correctly.

#### JDK (Java Development Kit) Installation

The JDK is essential for Android development with React Native.

1. Download JDK:
   - Go to the [Oracle JDK page](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html) or [AdoptOpenJDK](https://adoptopenjdk.net/).
   - Choose and download the appropriate version for your operating system.

2. Installation:
   - Follow the guided installation process after downloading the JDK.

3. Environment Configuration:
   - Add the installation path of the JDK to your system's environment variables.

#### Android Studio Installation

Android Studio provides the integrated development environment (IDE) for Android development.

1. Download Android Studio:
   - Visit the official [Android Studio website](https://developer.android.com/studio).
   - Download the latest version for your operating system.

2. Installation:
   - Run the downloaded installer and follow the instructions to complete the installation.
   - During installation, make sure to select the following options:
     - `Android SDK Platform`
     - `Android Virtual Device`

3. Post-installation Configuration:
   - After installation, start Android Studio.
   - Complete the guided configuration and make sure to install `Android SDK Platform 33`.
   - Choose between `Intel x86 Atom_64 System Image` or `Google APIs Intel x86 Atom System Image` for system images.

#### Git Installation

Git is an indispensable version control system for source code management.

1. Download Git:
   - Visit [Git SCM](https://git-scm.com/downloads).
   - Download the latest version for your operating system.

2. Installation:
   - Run the downloaded installer and follow the instructions.
   - During installation, choose the options that best suit your development environment.

3. Installation Verification:
   - Open the terminal or command prompt.
   - Type `git --version` to confirm that Git has been installed correctly.

### Project Execution

After setting up the development environment, follow these steps to execute the project:

#### Frontend Start-up

1. Opening the Terminal:
   - Open a terminal or command prompt on your computer.

2. Navigating to the Frontend Folder:
   - Use the `cd Frontend` command to move to the project's frontend folder.

3. Installing Dependencies:
   - Run `npm install` to install all necessary dependencies for the project.

4. Starting the Application:
   - Once the dependencies have been installed, run `npm start` to start the frontend of the application.

Follow these instructions to start the frontend of your Bombify project. Ensure that all installation and configuration steps have been completed correctly before proceeding with project execution.

#### Backend Configuration

Before running the backend, it is important to configure a Python virtual environment. This allows you to isolate project dependencies, avoiding conflicts with other Python installations on the system and facilitating the management of specific project libraries.

1. Creating the Virtual Environment:
   - Open a terminal or command prompt.
   - Navigate to the project's backend folder.
   - Run `python -m venv environment_name` to create a new virtual environment. `environment_name` can be replaced with the name you prefer for your virtual environment.

2. Activating the Virtual Environment:
   - **Windows**: Run `environment_name\Scripts\activate`.
   - **macOS/Linux**: Run `source environment_name/bin/activate`.
   - You will notice that the name of the virtual environment appears in the prompt, indicating that it is active.

3. Installing Django and Django REST framework:
   - With the virtual environment active, install Django by running `pip install django`.
   - Install Django REST framework with `pip install djangorestframework`.

After configuring the virtual environment and installing the necessary dependencies, you are ready to run the Bombify backend.

After configuring the virtual environment and installing the necessary dependencies, follow these steps to start the Bombify backend:

1. Database Migrations:
   - Make sure the virtual environment is active.
   - Run `python manage.py makemigrations` to prepare database migrations.
   - Then, run `python manage.py migrate` to apply the migrations to the database.

2. Starting the Django Server:
   - Start the backend server with the command `python manage.py runserver`.
   - The server will typically start at the address `http://127.0.0.1:8000/`.
   - Navigate to this address in your browser to verify that the server is active and functioning.

## Contacts

For any questions, feedback, or if you wish to collaborate on the project, please do not hesitate to contact me:

- **Email**: [gioeleali2001@gmail.com](mailto:gioeleali2001@gmail.com)
- **Telegram**: [@gioeleali](https://t.me/gioeleali)

---

Made with ❤️ by Gioele Alì
# Proyecto Fullstack que integra .NET api en el backend y React en el frontend. Monorepositorio.

Este proyecto es una aplicación web que integra un backend desarrollado en C# con .NET y un frontend construido con React. El objetivo del proyecto es proporcionar una API para gestionar colores y una interfaz de usuario que permite interactuar con dicha API de manera intuitiva.

## Características

- **Backend en .NET**: Implementación de una API RESTful en C# que maneja las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para la gestión de colores.
- **Frontend en React**: Interfaz de usuario moderna y dinámica que consume la API del backend, permitiendo a los usuarios ver, agregar, editar y eliminar colores.

## Requisitos

### Backend
- .NET SDK 6.0 o superior
- Herramienta de CLI de .NET

### Frontend
- Node.js 18.x o superior
- npm o bun como manejador de paquetes

## Instalación y Configuración

### Backend

1. Clona este repositorio:

  ```bash
  git clone https://github.com/Gonzalo-e-Sosa/Desafio-Colores.git
  ```

2. Navegar al backend:

  ```bash
  cd Desafio-Colores/backend
  ```

3. Restaura las dependencias del proyecto backend:

  ```bash
  dotnet restore
  ```

4. Ejecuta el proyecto backend:

  ```bash
  dotnet build
  dotnet run
  ```
    
5. El backend estará disponible en http://localhost:5087.

### Frontend

1. Navega al directorio del frontend:
  
  ```bash
  cd Desafio-Colores/frontend
  ```

2. Instala las dependencias:

  ```bash
  npm install
  ```

3. Ejecuta la aplicación:

  ```bash
  npm run start
  ```

4. El frontend estará disponible en http://localhost:5173

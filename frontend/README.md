# **Frontend: NoteApp**

Este documento describe la estructura, características y uso del frontend de **NoteApp**, una aplicación desarrollada con **React.js** para la gestión de usuarios y notas.

---

## **🛠 Tecnologías Usadas**

- **React.js**: Biblioteca para construir interfaces de usuario.
- **Vite**: Herramienta de construcción rápida para React.
- **React Router**: Navegación entre páginas.
- **Zustand**: Gestión de estado global.
- **TypeScript**: Tipado estático para mejorar la calidad del código.
- **CSS**: Diseño visual.
- **React Icons**: Para agregar figuras e iconos.
- **React Hot Toast**: Uso de notificaciones para el cliente en el flujo de uso de la aplicacion.

---

## **🚀 Características**

- Registro e inicio de sesión de usuarios.
- Gestión de notas (crear, editar, eliminar).
- Uso de modales y componentes reutilizables.
- Autenticación con **JWT** a través de Laravel Sanctum.
- Gestión de estado con **Zustand**.
- Diseño responsivo.

---

## **📂 Estructura del Proyecto**

```plaintext
src/
├── layout/            # Componentes que estructuran la aplicación
│   ├── Navbar.tsx     # Barra de navegación principal
├── components/        # Componentes reutilizables
│   ├── notes/         # Componentes para gestionar notas
├── hooks/             # Custom hooks para lógica específica
├── pages/             # Vistas principales de la aplicación
├── store/             # Gestión de estado con Zustand
├── types/             # Definición de tipos de TypeScript
├── pages/HomePage.tsx # Página de inicio de la aplicación
└── main.tsx           # Configuración inicial de React y Vite

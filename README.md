# **NoteApp: Gestión de Notas y Usuarios**

Este proyecto es una aplicación web que permite a los usuarios crear, editar y gestionar notas de manera eficiente. Desarrollada con **React.js** en el frontend y **Laravel 11** en el backend, esta aplicación proporciona un entorno seguro para gestionar tareas y anotaciones personales. Además, la autenticación está asegurada a través de **Sanctum** para una experiencia segura.

---

## 🚀 **Tecnologías Utilizadas**

### **Frontend**
- **React.js** (usando Vite para una configuración más rápida)
- **React Router** para la navegación entre vistas
- **Zustand** para el manejo de estados
- **TailwindCSS** para el diseño y la estilización

### **Backend**
- **Laravel 11** como framework backend
- **Sanctum** para la autenticación de usuarios
- **MySQL** como sistema de gestión de bases de datos
- **PHP 8.2** o superior

---

## 🔧 **Requisitos Previos**

1. **Node.js** (v16 o superior) , **pnpm** y **npm** instalados.
2. **Composer** instalado para la gestión de dependencias de PHP.
3. Un servidor local para PHP (puedes usar **XAMPP**, ).
4. **MySQL** o cualquier otra base de datos compatible configurada.

---

## ⚙️ **Instalación y Configuración**

### **Backend (Laravel)**

1. **Clonar el repositorio**:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd backend
   composer install
   Debe modificarse o crearse un .env en el backend para realizar las migraciones

   cd frontend
   pnpm install

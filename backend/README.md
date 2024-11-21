# **API Documentation: NoteApp Backend**

Este documento describe los endpoints disponibles en el backend de la aplicación **NoteApp**, desarrollado con **Laravel 11**. La API permite gestionar usuarios y notas, con endpoints protegidos por **Sanctum** para operaciones relacionadas con notas.

---

## **Usuarios**

| Método | Endpoint         | Descripción                                   | Autenticación |
|--------|------------------|-----------------------------------------------|---------------|
| GET    | `/users`         | Obtiene todos los usuarios.                  | No            |
| GET    | `/users/{id}`    | Obtiene un usuario específico por su ID.     | No            |
| POST   | `/users`         | Crea un nuevo usuario.                       | No            |
| PUT    | `/users/{id}`    | Actualiza un usuario específico.             | No            |
| POST   | `/users/login`   | Inicia sesión y obtiene un token de usuario. | No            |

---

## **Notas**

| Método | Endpoint          | Descripción                                                  | Autenticación |
|--------|-------------------|--------------------------------------------------------------|---------------|
| GET    | `/notes`          | Obtiene todas las notas.                                     | Sí            |
| POST   | `/notes`          | Crea una nueva nota asociada al usuario autenticado.         | Sí            |
| GET    | `/notes/user`     | Obtiene todas las notas del usuario autenticado.             | Sí            |
| DELETE | `/notes/{id}`     | Elimina una nota específica del usuario autenticado.         | Sí            |
| PUT    | `/notes/{id}`     | Actualiza una nota específica del usuario autenticado.       | Sí            |

---

## **Autenticación**

- Los endpoints relacionados con **Notas** requieren autenticación con **Sanctum**.
- Para autenticarte, envía el token en el encabezado `Authorization`:

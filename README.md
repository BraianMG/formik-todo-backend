# **ToDo List - Backend** (Documentación)

## Instalar dependencias
```
yarn install
```

## Configurar variables de entorno
- Copiar archivo __.env.example__ y renombrarlo a __.env__
- Completar con las variables de entorno correspondientes

## Levantar DB localmente con Docker
```
docker-compose up -d
```
- URL de conexión local: __mongodb://localhost:27017/formik-todo__

## Levantar proyecto
```
yarn dev
```

## Endpoints
- __Auth:__
  - __POST__ /api/v1/auth -> (Iniciar sesión)
    ```javascript
    Body (JSON):
    {
      "email": "example@example.com",
      "password": "atLeastEightCharacters"
    }
    ```
- __Users:__
  - __GET__ /api/v1/users -> (Obtener todos los usuarios)
  - __POST__ /api/v1/users -> (Crear un nuevo usuario)
    ```javascript
    Body (JSON):
    {
      "name": "example",
      "email": "example@example.com",
      "password": "atLeastEightCharacters"
    }
    ```
  - __PUT__ /api/v1/users/:id -> (Editar información de un usuario)
    ```javascript
    Headers:
    "x-token": token

    Body (JSON):
    {
      "name": "example",
      "email": "example@example.com",
      "password": "atLeastEightCharacters"
    }
    ```
  - __DELETE__ /api/v1/users/:id -> (Eliminar un usuario)
    ```javascript
    Headers:
    "x-token": token
    ```
- __Todos:__
  - __GET__ /api/v1/todos
    ```javascript
    ...
    ```
  - __POST__ /api/v1/todos
    ```javascript
    ...
    ```
  - __PUT__ /api/v1/todos
    ```javascript
    ...
    ```
  - __DELETE__ /api/v1/todos
    ```javascript
    ...
    ```
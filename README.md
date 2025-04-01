# Proyecto6Backend

## Descripción del Proyecto
Este proyecto es una API RESTful para gestionar una colección de libros y autores. Utiliza Express para el manejo de rutas y MongoDB (a través de Mongoose) para la gestión de datos. El objetivo es permitir operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre las colecciones de libros y autores, facilitando la relación entre ellos.

## Tecnologías Utilizadas
- Node.js: Entorno de ejecución para JavaScript en el servidor.
- Express: Framework para construir aplicaciones web y APIs en Node.js.
- MongoDB: Base de datos NoSQL para almacenar los datos.
- Mongoose: Biblioteca de modelado de datos para MongoDB y Node.js.
- Mongo Atlas: Servicio de base de datos en la nube para MongoDB.
- Dotenv: para acceder a las variables del entorno.

## Clonación y Ejecución Local
Para clonar y ejecutar este proyecto en tu máquina local, sigue estos pasos:

1. Clona el repositorio:
git clone https://github.com/tu_usuario/Proyecto6Backend.git
2. Navega al directorio del proyecto:
cd Proyecto6Backend
3. Instala las dependencias:
npm install
4. Configura la base de datos:
Asegúrate de tener una cuenta en Mongo Atlas y configura tu URI de conexión en un archivo 
.env (o directamente en tu código).
5. Ejecuta el servidor:
npm start
6. Accede a la API:
La API estará disponible en http://localhost:3000 (o el puerto que hayas configurado).

## Endpoints
A continuación se presenta una tabla con los endpoints disponibles en la API:

| Método | Endpoint | Descripción |
|--------|-------------------------|-----------------------------------------------|
| GET | /authors | Obtiene todos los autores |
| GET | /authors/:id | Obtiene un autor por su ID |
| POST | /authors | Crea un nuevo autor |
| PUT | /authors/:id | Actualiza un autor existente |
| DELETE | /authors/:id | Elimina un autor por su ID |
| GET | /books | Obtiene todos los libros |
| GET | /books/:id | Obtiene un libro por su ID |
| POST | /books | Crea un nuevo libro |
| PUT | /books/:id | Actualiza un libro existente |
| DELETE | /books/:id | Elimina un libro por su ID |
| GET | /books/author/:author | Obtiene un array de libros por autor |
| GET | /books/category/:genre | Obtiene un array de libros por género |
| GET | /categories | Obtiene todas las categorías |
| GET | categories/:id | Obtiene una categoría por ID |
| POST | categories | Función para crear una categoría |
| PUT | categories | Función para salvar o editar categorías |
| DELETE | categories | Elimina la categoría |


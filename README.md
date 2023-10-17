<p align="center">
  <img src="https://drive.google.com/uc?export=view&id=1yBJigY_ddinB4UdxHkBSUcrdjyhrpc99" alt="Logo del Proyecto" width="150">
</p>

# API de estadísticas

<p align="center">
  <em>Reto Promart</em>
</p>

<h4 align="center">Un microservicio de API REST para gestionar las estadísticas</h4>

<p align="center">
  <img src="https://img.shields.io/badge/AdonisJS-v5.9.0-blue" alt="AdonisJS">
  <img src="https://img.shields.io/badge/Typescript-v4.6.x-blue" alt="Typescript">
  <img src="https://img.shields.io/badge/ORM%20Lucid-v18.4.2-blue" alt="ORM Lucid">
  <img src="https://img.shields.io/badge/MySQL-blue" alt="MySQL">
  <img src="https://img.shields.io/badge/GCP-blue" alt="GCP">
  <img src="https://img.shields.io/badge/Version-v1.0.0-brightgreen" alt="Versión">
</p>

## Tabla de Contenidos

1. [Introducción](#introducción)
2. [Prerrequisitos](#prerrequisitos)
3. [Instalación](#instalación)

## Introducción

El microservicio de registro de clientes es una API REST que permite realizar las siguientes operaciones:

- Obtener la media y la desviación estandar de la población(uso de sumas acumulativas).
- Actualizar las sumas acumulativas y solamente permitido para el microservicio de clientes.

Este servicio se basa en AdonisJS, Typescript, MySQL y ORM Lucid, y se despliega en Google App Engine.

## Prerrequisitos

- Node >= v16
- Xampp = 8.2.4
- Relizar los pasos de creación de la base de datos, migración e importación de datos iniciales explicados en el repositorio del [Microservicio de clientes](https://github.com/zlJoseph/Microservice_Client)

## Instalación

1. Clona este repositorio.

```bash
git clone https://github.com/zlJoseph/Microservice_Analytic.git
cd Microservice_Analytic
```

2. Instale las dependencias.

```bash
npm install
```

3. Cree un nuevo archivo `.env` y copia el contenido de `.env.example` en el. Configurar con sus credenciales de base de datos si fuese necesario.

```ini 
PORT=3001
HOST=0.0.0.0
NODE_ENV=development
APP_KEY=COLYqlayPHniVL-F-h8wuz9ht072-ceb
API_KEY=qmmoHpiK0DO4teDNLgI0wQWt6oldKUMBOF180oLpKnAdHogPCSO5gMCpIdxrrHShbu5Yg3VbjG81EXsfPzXNOp0VXE0IRKcdkG2SQB17gqhKUkLdXp703MBdRssreuI6
DRIVE_DISK=local
#Configuración de la base de datos
DB_CONNECTION=mysql
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=root
MYSQL_PASSWORD=
MYSQL_DB_NAME=promart
```

4. Inicia el servidor de desarrollo.

```bash
node ace serve --watch
```
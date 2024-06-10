/**
 * Crearemos un servidor con el módulo express
 * 1- archivo server.js
 * 2- creamos la estructura del proyecto carpeta public
 * 3- npm init -y
 * 4- npm install express --save
 * 5- Avanzamos con el código del servidor
 **/

//1- Importamos el módulo express
const express = require("express");

//2- Inicializamos (creamos una instancia de express)
const app = express();

//3- Declaramos el puerto
const PORT = 3000;

//4- Configuramos la carpeta public
app.use(express.static("public"));

//5- Agregamos rutas o endpoints
app.get("/index", function(req, res){
    res.send(__dirname+"/public/index.html");
});

app.get("/contacto", function(req, res){
    res.send(__dirname+"/public/pages/contacto.html");
});

app.get("/grupo_24", function(req, res){
  res.send(__dirname+"/public/pages/grupo_24.html");
});

app.get("/peliculas", function(req, res){
  res.send(__dirname+"/public/pages/peliculas.html");
});

app.get("/series", function(req, res){
  res.send(__dirname+"/public/pages/series.html");
});

//6- Activamos el servidor
app.listen(PORT, function(){console.log(`Servidor Express escuchando en el puerto: ${PORT}`)});
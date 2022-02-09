const express = require('express')
const app = express()
const port = process.env.PORT || 3000 //hacemos uso de las variables de entorno

// Motor de plantillas
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");


// Cambiar la raiz de los ficheros estáticos.

app.use(express.static(__dirname + "/public"));

// Tampoco va a entrar nunca porqure el directorio de ahor aes /public no es /
app.get('/', (req, res) => {

    console.log(__dirname);

    res.render("index", {titulo : "mi jeje titulo dinámico"});

})

// ES importante mantener la estructura de carpeta, si entro en una no puedo salir y no funcionara
app.get('/contacto', (req, res) => {

    res.render("contacto", {tituloContacto : "Estamos en contacto de manera dinamica"});

})

// Poner en escucbha el servidor
app.listen(port, () => {

  console.log(`Example app listening on port ${port}`);

})

// Aquí no va a entrar nunca si no existe una carepaeta contacto en public.
app.get("/contacto", (req, res) =>{

    res.send("Estás en contacto.");

})


app.use((req,res) => {

    // res.status(404).sendFile(__dirname + "/public/404.html");
    res.status(404).render("404", {
        titulo: "Error 404", 
        descripcion: "Page not found"
    });

})


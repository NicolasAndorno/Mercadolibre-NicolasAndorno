const express = require('express');
const path = require("path")

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use( express.static(publicPath) );

app.set('puerto',process.env.PORT || 3000)



app.listen(app.get('puerto'), ()=>console.log(`Servidor escuchando en puerto ${app.get('puerto')}`));


//RUTAS//
app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, './views/home.html'))

})

app.get('/register', (req, res) =>{
    res.sendFile(path.join(__dirname, './views/register.html'))

})

app.get('/login', (req, res) =>{
    res.sendFile(path.join(__dirname, './views/login.html'))
})
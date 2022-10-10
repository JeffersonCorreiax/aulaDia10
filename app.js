const express = require("express");
const routeAbout = require("./src/routes/routeAbout");
const routeHome = require("./src/routes/routeHome");
const routeGames = require("./src/routes/routeGames");
const routeContact = require("./src/routes/routeContact");
const routeAccessories = require("./src/routes/routeAccessories");
const routePayment = require("./src/routes/routePayment");
const routeCart = require("./src/routes/routeCart");
const routeLogin = require("./src/routes/routeLogin");
const routeRegister = require('./src/routes/routeRegister');

let app = express();
const path = require('path');
app.use(express.json());
app.use(express.urlencoded({ extended: false}));



app.use('/', routeAbout);
app.use('/', routeHome);
app.use('/', routeGames);
app.use('/', routeContact);
app.use('/', routeAccessories);
app.use('/', routePayment);
app.use('/', routeCart);
app.use('/', routeLogin);
app.use('/', routeRegister);
app.use(express.static(path.join(__dirname, '/public')));
    









app.listen(3000, ()=> {  // servidor para testes
    console.log("Servidor rodando na porta 3000")
})
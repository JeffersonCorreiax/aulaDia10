const express = require("express");

const multer = require('multer');

const routeAbout = require("./src/routes/routeAbout");
const routeHome = require("./src/routes/routeHome");
const routeGames = require("./src/routes/routeGames");
const routeContact = require("./src/routes/routeContact");
const routeAccessories = require("./src/routes/routeAccessories");
const routePayment = require("./src/routes/routePayment");
const routeCart = require("./src/routes/routeCart");
const routeLogin = require("./src/routes/routeLogin");
const routeRegister = require('./src/routes/routeRegister');

 // toda vez que for requerer um arquivo e colocar o '/' já irá pra pasta public



let app = express();

const path = require('path');

app.use(express.json());

app.use(express.urlencoded({ extended: false}));


const multerDiskStorage = multer.diskStorage({
    destination: (req, file, callback) => {
        const folder = path.join(__dirname, "../piTeste/public/profileimg");
        callback(null, folder);
    },
    filename: (req, file, callback) =>{
        const imageName = Date.now() + file.originalname;
        callback(null, imageName);
    },
 });

 const upload = multer({ storage: multerDiskStorage});

app.use('/', routeAbout);
app.use('/', routeHome);
app.use('/', routeGames);
app.use('/', routeContact);
app.use('/', routeAccessories);
app.use('/', routePayment);
app.use('/', routeCart);
app.use('/', routeLogin);
app.use('/', upload.single('userImage'), routeRegister);


app.use(express.static(path.join(__dirname, '..', 'public')));


app.set('view engine', 'ejs');
app.set('views', __dirname + '/src/views');

///////MIDDLEWARES

    

//////////////////














app.listen(3000, ()=> {  // servidor para testes
    console.log("Servidor rodando na porta 3000")
})
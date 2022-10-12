const path = require("path");
const { send } = require("process");
const RegisterController = {
    index : (req, res) => {
        res.sendFile(path.join(__dirname, "../../src/views/cadastro.ejs"));
    },
    
    cadastro : (req, res) => {
       
        console.log(req.body);
        res.send("Funcionou");
    }
}


module.exports = RegisterController;
const path = require("path");
const { send } = require("process");
const RegisterController = {
    index : (req, res) => {
        res.sendFile(path.join(__dirname, "../../public/html/cadastro.html"));
    },
    
    cadastro : (req, res) => {
       
        console.log(req.body);
        res.send("Funcionou");
    }
}


module.exports = RegisterController;
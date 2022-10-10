const path = require("path");
const RegisterController = {
    index : (req, res) => {
        res.sendFile(path.join(__dirname, "../../public/html/cadastro.html"));
    },
    
    cadastro : (req, res) => {
       
        
    console.log(req.body);
    }
}


module.exports = RegisterController;
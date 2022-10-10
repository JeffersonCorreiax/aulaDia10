const path = require('path');
const LoginController = {
    index : (req, res) => {
       res.sendFile(path.join(__dirname, "../../public/html/cadastro.html"));
    
    },
    login : (req, res) => {
        console.log(req.body);

        res.redirect("/About");
    }
}

module.exports = LoginController;
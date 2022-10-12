const path = require('path');
const GameController = {
    index : (req, res) => {
        res.sendFile(path.join(__dirname, "../../src/views/games.ejs"));
    }
}

module.exports =  GameController;
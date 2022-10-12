const path = require('path');

const HomeController = {
    index: (req,res) => {
        res.render('index')
    }
}

module.exports = HomeController;
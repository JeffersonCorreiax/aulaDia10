const express = require("express");
const router = express.Router();
const RegisterController = require("../controllers/RegisterControllers");
const multer = require('multer');


//const multerDiskStorage = multer.diskStorage({
 //   destination: (req, file, callback) => {
 //       const folder = path.join(__dirname, "../public/profileimg");
  //      callback(null, folder);
 //   },
 //   filename: (req, file, callback) =>{
 //       const imageName = Data.now() + file.originalname;
 //       callback(null, imageName);
 //   },
//});

//const upload = multer({ storage: multerDiskStorage});


router.get('/Register', RegisterController.index);
router.post('/Register',RegisterController.cadastro);


module.exports = router;


const router = require('express').Router();
const authcontroller=require('../controllers/auth.controller.js');
router.post('/register',authcontroller.register);
router.post('/login',authcontroller.login);
module.exports=router;
const express = require('express');
const router = express.Router();

const userController = require('../controllers/users_controller');

router.get('/register',userController.register);
router.get('/logging',userController.logging);
router.get('/dashboard_client',userController.Dashboard_client);    
router.get('/face',userController.face);
router.get('/meeting',userController.meeting);
router.get('/lobby',userController.lobby)
router.get('/email',userController.email);
router.get('/new_password',userController.new_password);
router.get('/verify_img',userController.verify_img);
router.post('/client_register',userController.client_register);
router.post('/client_login',userController.client_login);
// router.get('/user_data',userController.userdata);

module.exports = router;
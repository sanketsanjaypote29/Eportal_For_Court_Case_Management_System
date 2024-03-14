const express = require('express');
const router = express.Router();
router.use(express.static('lawyer'))
const userController = require('../controllers/lawyer_controller');

router.get('/register',userController.register);
router.get('/logging',userController.logging);
router.get('/number',userController.number)
router.get('/complaint',userController.complaint)
router.get('/document',userController.document)
router.get('/Dashboard_lawyer',userController.Dashboard_lawyer)
router.get('/face',userController.face)
router.get('/meeting',userController.meeting)
router.get('/lobby',userController.lobby);
router.get('/email',userController.email);
router.get('/verify_img',userController.verify_img);
router.get('/new_password',userController.new_password);
router.post('/lawyer_register',userController.lawyer_register);
router.post('/lawyer_login',userController.lawyer_login);
router.post('/numbers',userController.numbers);
router.post('/case',userController.case);
router.post('/complaintBox',userController.complaintBox)
router.post('/documentBox',userController.documentBox)
module.exports = router;
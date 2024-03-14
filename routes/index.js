const express = require('express');
const app = express();
const router = express.Router();
const homeController = require('../controllers/home_controller.js');
console.log("Router loaded");

app.use(express.json());

router.get('/',homeController.home);//controll home request 
router.get('/about',homeController.aboutUS);
router.get('/service',homeController.services);
router.get('/dashboard',homeController.dashboard)
router.get('/contactUs',homeController.contactUs)
router.get('/site_map',homeController.siteMap);
router.get('/terms&condition',homeController.terms);
// router.get('/lobby',homeController.lobby);
router.post('/contactUs_data',homeController.contactUs_data)
router.use('/client',require('./client'));//controll all user requestsy
//for any further routes access from here
router.use('/lawyer',require('./lawyer')); 
module.exports = router;
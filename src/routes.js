const router = require('express').Router();
// making a modular router by express.Router(); to be configured and nest routes



const homeController = require('./controllers/homeController');
const movieController = require('./controllers/movieController');


router.use(movieController);
router.use(homeController);



module.exports = router;
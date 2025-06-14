const router = require('express').Router();
const userController = require('../controllers/user');
const auth = require('../middleware/auth');

//Routes
router.get('/', userController.getLogin);

router.get('/register', userController.getRegister);

router.post('/register', auth.register);

router.post('/login', auth.log, userController.getHome);

router.get('/pastpaper', userController.getPastpaper);

router.get('/syllabus', userController.getSyllabus);

router.get('/assesment', userController.getAssesment);

router.get('/page1', userController.getPage1);

module.exports = router;
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

router.get('/page2', userController.getPage2);

router.get('/page3', userController.getPage3);

router.get('/page4', userController.getPage4);

router.get('/page5', userController.getPage5);

router.get('/page6', userController.getPage6);

router.get('/page7', userController.getPage7);

router.get('/page8', userController.getPage8);

router.get('/page9', userController.getPage9);

router.get('/page10', userController.getPage10);

router.get('/page11', userController.getPage11);

router.get('/page12', userController.getPage12);

router.get('/page13', userController.getPage13);

router.get('/page14', userController.getPage14);

module.exports = router;
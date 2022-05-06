const express = require('express');
const router = express.Router();
const passport = require('passport');
const userController = require('../controllers/userController');

//router.get('/getAll', userController.getAll);
router.post('/register', userController.register);
router.post('/login', passport.authenticate('local'), userController.login);
router.post('/logout', userController.logout);
router.put('/:id', userController.update);
router.get('/me', userController.me);
router.put('/admin/adminPromote/:id', userController.adminPromote);
router.put('/admin/suprAdmin/:id', userController.suprAdmin);
router.post('/createRole', userController.createRole);




module.exports = router;
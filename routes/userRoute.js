const router = require('express').Router();

const {registerUser, userLogin } = require('../controllers/userController');
const verifyEmail = require('../controllers/verifyEmail');

router.post('/register', registerUser);
router.post('/login', userLogin);
router.get('/verify-email', verifyEmail);

module.exports = router;
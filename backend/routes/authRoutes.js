import express from 'express';
import { loginUser, logoutUser, signinUser } from '../controllers/authController.js';

const router = express.Router();

router.get('/login', loginUser);
router.get('/signin', signinUser);
router.get('/logout', logoutUser);


export default router;
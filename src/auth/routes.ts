import { Router } from 'express';
import { loginUser, signUpUser } from './controller';

const router = Router();

router.post('/login', loginUser);
router.post('/signup', signUpUser); 

export default router;
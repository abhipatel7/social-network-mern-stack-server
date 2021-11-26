import express from 'express';

import { register } from '../controllers/auth';

const router = express.Router();

router.post('/api/register', register);

export default router;

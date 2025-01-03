import { Router } from 'express';
import { uploadImage } from '../controllers/uploadController.js';

const router = Router();

router.post('/images', uploadImage);

export default router;

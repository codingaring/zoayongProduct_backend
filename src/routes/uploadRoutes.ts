import { Router } from 'express';
import { uploadImage } from '../controllers/uploadController';

const router = Router();

router.post('/images', uploadImage);

export default router;

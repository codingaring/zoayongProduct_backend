import express, { type Request, type Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';
import cors from 'cors';
import productRoutes from './routes/productRoutes.js';
import authRoutes from './routes/authRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

mongoose
  .connect(process.env.DATABASE_URL || '')
  .then(() => console.log('Connected to DB'))
  .catch((error: any) => console.error('Connection error', error));

const app = express();

// const corsOptions = {
//   origin: ['http://localhost:3000'],
// };

// app.use(cors(corsOptions));
app.use(cors());
app.use(express.json());

app.use('/products', productRoutes);
app.use('/login', authRoutes);
app.use('/upload', uploadRoutes);

app.listen(3000, () => console.log('Server Started'));

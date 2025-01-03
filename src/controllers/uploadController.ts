import { NextFunction, Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import asyncHandler from '../utils/asyncHandler.js';
import upload from '../middleware/multer.js';
import { bucket } from '../utils/initFirebase.js';

// 이미지 업로드 API
export const uploadImage = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    // Multer로 업로드 처리
    upload.single('image')(req, res, async (error) => {
      if (error) {
        return next(error);
      }

      if (!req.file) {
        return res.status(400).json({ error: '첨부된 파일이 없습니다.' });
      }

      const file = req.file;
      const uniqueId = uuidv4();
      const fileName = `uploads/${uniqueId}-${file.originalname}`;
      const blob = bucket.file(fileName);

      const blobStream = blob.createWriteStream({
        metadata: {
          contentType: file.mimetype,
        },
      });

      blobStream.on('error', (error) => {
        next(error);
      });

      blobStream.on('finish', async () => {
        const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${encodeURIComponent(
          fileName
        )}?alt=media`;

        res.status(201).json({ imageUrl: publicUrl });
      });

      blobStream.end(file.buffer);
    });
  }
);

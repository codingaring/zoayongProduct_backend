import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { loadEnv } from '../utils/loadEnv';

loadEnv();

export const verifyAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: '토큰이 만료되었습니다.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      id: string;
      role: string;
    };
    if (decoded.role !== 'admin') {
      return res.status(403).json({ message: '접근 권한이 없습니다.' });
    }
    req.body.userId = decoded.id;
    next();
  } catch (error: any) {
    res.status(401).json({ message: '유효하지 않은 토큰입니다.' });
  }
};

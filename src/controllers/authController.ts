import { Response, Request, RequestHandler } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { loadEnv } from '../utils/loadEnv.js';
import asyncHandler from '../utils/asyncHandler.js';
import User from '../models/User.js';

loadEnv();

export const login: RequestHandler = asyncHandler(
  async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email }).select('+password');

    if (!user || user.role !== 'admin') {
      return res.status(401).json({ message: '이메일을 확인해주세요.' });
    }

    // admin
    if (user.password) {
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(401).json({ message: '비밀번호를 확인해주세요.' });
      }
    }

    const accessToken = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET!,
      {
        expiresIn: '1h',
      }
    );
    return res.status(200).json({ accessToken });
  }
);

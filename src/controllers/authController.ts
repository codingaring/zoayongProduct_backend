import { Response, Request, RequestHandler } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { loadEnv } from '../utils/loadEnv.js';
import asyncHandler from '../utils/asyncHandler.js';
import User from '../models/User.js';
import admin from '../utils/initFirebase.js';
import generateJwtToken from '../utils/jenerateJwtToken.js';

loadEnv();

export const login: RequestHandler = asyncHandler(
  async (req: Request, res: Response) => {
    const { type } = req.query;

    // google, kakao
    if (type === 'google' || type === 'kakao') {
      const { token } = req.body;
      console.log(token);

      if (!token) {
        return res.status(400).json({ message: '구글 로그인을 확인해주세요.' });
      }

      const decodedToken = await admin.auth().verifyIdToken(token);
      const { uid, email: googleEmail } = decodedToken;

      let user = await User.findOne({ uid });
      if (!user) {
        user = new User({ uid, email: googleEmail });
        await user.save();
      }

      const accessToken = generateJwtToken({ id: user._id, uid, role: 'user' });

      return res.status(200).json({
        message: '구글 로그인 성공',
        uid,
        email: googleEmail,
        accessToken,
      });
    }

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

    const accessToken = generateJwtToken({ id: user._id, role: user.role });

    return res.status(200).json({ accessToken });
  }
);

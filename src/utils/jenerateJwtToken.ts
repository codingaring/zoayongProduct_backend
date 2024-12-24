import { loadEnv } from './loadEnv.js';
import jwt from 'jsonwebtoken';

loadEnv();

const generateJwtToken = (
  payload: Record<string, any>,
  secret: string = process.env.JWT_SECRET!,
  expiresIn: string = '1h'
) => {
  if (!secret) {
    throw new Error('JWT_SECRET가 설정되지 않았습니다.');
  }

  return jwt.sign(payload, secret, { expiresIn });
};

export default generateJwtToken;

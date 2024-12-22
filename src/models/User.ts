import { Document, Schema, model } from 'mongoose';
import { type User as UserType } from '../types/user';

type User = UserType & Document;

// 상품 스키마
const UserSchema: Schema = new Schema<User>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    select: false,
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
  },
  oauthProvider: {
    type: String,
    enum: ['google', 'kakao'],
  },
  oauthId: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = model<User>('UserSchema', UserSchema);

export default User;

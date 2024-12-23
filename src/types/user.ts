// User type
export type User = {
  email: string;
  password?: string;
  role: UserRole;
  oauthProvider?: OauthProvider;
  oauthId?: string;
  createdAt: Date;
  uid?: string;
};

// Part of a User Type
type OauthProvider = 'google' | 'kakao';

type UserRole = 'admin' | 'user';

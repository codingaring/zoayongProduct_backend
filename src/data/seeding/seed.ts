import mongoose from 'mongoose';
import { loadEnv } from '../../utils/loadEnv.js';

loadEnv();

const seedDatabase = async (schema: any, mockData: any) => {
  try {
    if (!process.env.DATABASE_URL) {
      throw new Error('DATABASE_URL 환경 변수가 설정되지 않았습니다.');
    }

    await mongoose.connect(process.env.DATABASE_URL);
    console.log('MongoDB에 연결되었습니다.');

    await schema.deleteMany({});
    console.log('기존 데이터를 삭제했습니다.');

    await schema.insertMany(mockData);
    console.log('새로운 데이터를 삽입했습니다.');

    await mongoose.disconnect();
    console.log('MongoDB 연결이 종료되었습니다.');
  } catch (error) {
    console.error('데이터베이스 초기화 중 오류가 발생했습니다:', error);
    mongoose.disconnect();
  }
};

export default seedDatabase;

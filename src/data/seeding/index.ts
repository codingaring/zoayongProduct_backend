import Product from '../../models/Product.js';
import User from '../../models/User.js';
import data from '../mockProduct.js';
import userMock from '../mockUser.js';
import seedDatabase from './seed.js';

const runSeeding = async () => {
  try {
    await seedDatabase(Product, data);
    await seedDatabase(User, userMock);
    console.log('데이터베이스 초기화 완료!');
  } catch (error: any) {
    console.error('전체 초기화 과정에서 오류가 발생했습니다.', error);
  }
};

runSeeding();

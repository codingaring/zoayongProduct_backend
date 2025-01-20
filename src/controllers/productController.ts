import Product from '../models/Product.js';
import asyncHandler from '../utils/asyncHandler.js';
import mongoose from 'mongoose';

// 전체 상품 조회 및 페이지네이션
export const getProducts = asyncHandler(async (req, res) => {
  const sort = req.query.sort as 'asc' | 'desc';
  const limit = Number(req.query.limit) || 10; // 한 페이지당 표시할 상품 수 (기본값: 10)
  const page = Number(req.query.page) || 1; // 현재 페이지 번호 (기본값: 1)

  const sortOption = { price: sort };
  const skip = (page - 1) * limit;

  // MongoDB에서 페이지네이션 데이터 조회
  const products = await Product.find()
    .sort(sortOption)
    .skip(skip) // 건너뛸 문서 수
    .limit(limit) // 가져올 문서 수
    .select('id name price category thumbnailImage');

  // 전체 상품 수 가져오기
  const totalCount = await Product.countDocuments();

  res.send({
    totalCount, // 전체 상품 수
    currentPage: page, // 현재 페이지 번호
    totalPages: Math.ceil(totalCount / limit), // 전체 페이지 수
    products, // 상품 데이터
  });
});

// 특정 상품 상세 정보 조회
export const getProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'id의 형식이 유효하지 않습니다.' });
  }

  const product = await Product.findById(id);
  if (!product) {
    res.status(404).send({ message: '해당하는 id의 상품을 찾을 수 없습니다.' });
  }

  res.status(200).json(product);
});

// 관리자 상품 추가 및 수정
export const addProduct = asyncHandler(async (req, res) => {
  const newProduct = await Product.create(req.body);
  res.status(201).send(newProduct);
});

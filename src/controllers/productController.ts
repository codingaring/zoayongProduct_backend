import Product from '../models/Product.js';
import asyncHandler from '../utils/asyncHandler.js';

// 전체 상품 조회 및 정렬
export const getProducts = asyncHandler(async (req, res) => {
  const sort = req.query.sort as 'asc' | 'desc';
  const count = Number(req.query.count);

  const sortOption = { price: sort };
  const products = await Product.find()
    .sort(sortOption)
    .limit(count)
    .select('id name price category thumbnailImage');

  res.send(products);
});

// 특정 상품 상세 정보 조회
export const getProduct = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Cannot find given id' });
  }
});

// 관리자 상품 추가 및 수정
export const addProduct = asyncHandler(async (req, res) => {
  const newProduct = await Product.create(req.body);
  res.status(201).send(newProduct);
});

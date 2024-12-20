import mongoose from 'mongoose';

const { Schema, model } = mongoose;

// 상품 스키마
const ProductSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      default: () => new mongoose.Types.ObjectId().toString(),
    }, // 자동 생성 ID
    category: {
      type: String,
      required: true,
      enum: ['토이', '잡화', '리빙', '문구/사무', '봉제', '포장'],
    }, // 상품 카테고리
    name: { type: String, required: true }, // 상품명
    price: {
      type: [
        new Schema({
          option: { type: String, required: true }, // 가격 옵션 (예: 기본, 세일 등)
          price: { type: Number, required: true }, // 해당 옵션의 가격
        }),
      ],
      validate: [
        (val: any) => Array.isArray(val) || typeof val === 'object',
        'price 필드는 배열이거나 객체여야 합니다.',
      ],
    },
    description: { type: String, default: '' }, // 상세 설명
    thumbnailImage: { type: String, required: true }, // 썸네일 이미지

    // 추가 정보
    specifications: {
      specImage: { type: String, required: true }, // 상품 스펙 이미지
      specDetails: {
        name: { type: String, required: true }, // 스펙 이름
        extra: {
          type: Schema.Types.Mixed, // 추가 정보를 유연하게 저장 (unknown 타입)
          default: {},
        },
      },
      images: [{ type: String }], // 상품 이미지 리스트
    },
    options: [
      new Schema({
        optionName: { type: String, required: true }, // 옵션 이름
        optionColor: { type: String, default: '' }, // 옵션 색상
        optionPattern: { type: String, default: '' }, // 옵션 패턴
        optionImage: { type: String, required: true }, // 옵션 이미지 URL
      }),
    ], // 상품 옵션
    cautions: [{ type: String, default: '' }], // 주의사항 리스트
    customOptions: [
      new Schema({
        option: { type: String, required: true }, // 옵션 이름
        MOQ: { type: Number, default: null }, // 최소 주문 수량 (선택 사항)
        duration: { type: String, required: true }, // 소요 기간
        characteristics: { type: String, default: '' }, // 추가 특징
      }),
    ], // 커스텀 옵션 리스트
    relatedProducts: [{ type: String }], // 연관 상품 리스트 (이름만 저장)
    configurationOptions: [
      new Schema({
        option: { type: String, required: true }, // 옵션 이름
        optionImageUrl: { type: String, required: true }, // 옵션 이미지 URL
      }),
    ], // 구성 옵션
  },
  {
    timestamps: true, // 생성일, 수정일 관리
  }
);

const Product = model('Product', ProductSchema);

export default Product;

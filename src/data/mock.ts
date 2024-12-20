import { type Product } from './types';

const data: Product[] = [
  /** 토이 */
  // 말랑얼굴쿠션
  {
    category: '토이',
    name: '말랑얼굴쿠션',
    price: { option: 'default', price: 19000 },
    description: '말랑말랑 푹신푹신 부드러운 촉감이 너무 조아용~',
    thumbnailImage: 'https://ibb.co/FXqW3Z0',
    specifications: {
      specImage: 'https://ibb.co/FXqW3Z0',
      specDetails: {
        name: '말랑얼굴쿠션',
        extra: {
          features: '폴라폴리스 100%',
          innerFeatures: '인조솜',
        },
      },
      images: [
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
      ],
    },
    options: [
      {
        optionName: '민트',
        optionColor: '#5afadb',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
    ],
    cautions: [
      '미지근한 물에 중성세제를 이용해서 손세탁 하시고, 그늘에서 자연 건조해 주세요',
      '드라이클리닝, 세탁기, 건조기, 다리미 사용하지 마세요.',
      '충격과 화기, 직사광선 및 고온은 피해주세요.',
      '사용자의 부주의로 인한 제품 파손, 부속물의 부분 교환 등의 교환, 반품은 불가합니다.',
      '봉제제품 특성상 인형마다 외형의 차이가 있을 수 있습니다.',
    ],
    customOptions: [],
    relatedProducts: ['키링인형', '중형인형', '소형 얼굴쿠션'],
  },

  // 소형얼굴쿠션
  {
    category: '토이',
    name: '소형얼굴쿠션',
    price: { option: 'default', price: 17000 },
    description:
      '촉촉~ 말랑말랑~ 귀여운 조아용 쿠션을 사랑하는 사람에게 선물해 보아용!',
    thumbnailImage: 'https://ibb.co/FXqW3Z0',
    specifications: {
      specImage: 'https://ibb.co/FXqW3Z0',
      specDetails: {
        name: '소형얼굴쿠션',
        extra: {
          features: '폴라폴리스 100%',
          innerFeatures: '인조솜',
        },
      },
      images: [
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
      ],
    },
    options: [
      {
        optionName: '민트',
        optionColor: '#5afadb',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
    ],
    cautions: [
      '미지근한 물에 중성세제를 이용해서 손세탁 하시고, 그늘에서 자연 건조해 주세요',
      '드라이클리닝, 세탁기, 건조기, 다리미 사용하지 마세요.',
      '화기, 직사광선, 고온, 습기가 많은 곳을 피해 보관해주세요.',
      '사용자의 부주의로 인한 제품 파손, 부속물의 부분 교환 등의 교환, 반품은 불가합니다.',
      '봉제제품 특성상 인형마다 외형의 차이가 있을 수 있으니 참고 부탁드립니다.',
      '상품의 실제 색감은 모니터의 해상도, 조명에 따라 다소 차이가 있을 수 있습니다.',
    ],
    customOptions: [],
    relatedProducts: ['키링인형', '중형인형', '말랑얼굴쿠션'],
  },

  // 키링인형
  {
    category: '토이',
    name: '키링인형',
    price: { option: 'default', price: 8000 },
    description: '귀엽고 깜찍한 조아용을 열쇠고리나 가방에 달아보아용~',
    thumbnailImage: 'https://ibb.co/FXqW3Z0',
    specifications: {
      specImage: 'https://ibb.co/FXqW3Z0',
      specDetails: {
        name: '키링인형',
        extra: {
          features: '폴리에스테르',
          innerFeatures: '인조솜',
        },
      },
      images: [
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
      ],
    },
    options: [
      {
        optionName: '그린',
        optionColor: '#5afadb',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
    ],
    cautions: [
      '미지근한 물에 중성세제를 이용해서 손세탁 하시고, 그늘에서 자연 건조해 주세요',
      '드라이클리닝, 세탁기, 건조기, 다리미 사용하지 마세요.',
      '화기, 직사광선, 고온, 습기가 많은 곳을 피해 보관해주세요.',
      '사용자의 부주의로 인한 제품 파손, 부속물의 부분 교환 등의 교환, 반품은 불가합니다.',
      '봉제제품 특성상 인형마다 외형의 차이가 있을 수 있으니 참고 부탁드립니다.',
      '상품의 실제 색감은 모니터의 해상도, 조명에 따라 다소 차이가 있을 수 있습니다.',
    ],
    customOptions: [],
    relatedProducts: ['소형얼굴쿠션', '중형인형', '말랑얼굴쿠션'],
  },

  // 중형 인형 - 조아용, 수줍어용
  {
    category: '토이',
    name: '중형인형',
    price: { option: 'default', price: 28000 },
    description:
      '소장욕구 뿜뿜! 여기서 봐도, 저기서 봐도 귀여운 매력적인 볼의 조아용 인형이 출시됐어용!',
    thumbnailImage: 'https://ibb.co/FXqW3Z0',
    specifications: {
      specImage: 'https://ibb.co/FXqW3Z0',
      specDetails: {
        name: '중형인형',
        extra: {
          features: '폴리에스테르',
        },
      },
    },
    options: [
      {
        optionName: '그린',
        optionColor: '#5afadb',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
    ],
    cautions: [
      '미지근한 물에 중성세제를 이용해서 손세탁 하시고, 그늘에서 자연 건조해 주세요',
      '드라이클리닝, 세탁기, 건조기, 다리미 사용하지 마세요.',
      '화기, 직사광선, 고온, 습기가 많은 곳을 피해 보관해주세요.',
      '사용자의 부주의로 인한 제품 파손, 부속물의 부분 교환 등의 교환, 반품은 불가합니다.',
      '봉제제품 특성상 인형마다 외형의 차이가 있을 수 있으니 참고 부탁드립니다.',
      '상품의 실제 색감은 모니터의 해상도, 조명에 따라 다소 차이가 있을 수 있습니다.',
      '봉제 공정 상 약간의 비대칭, 실밥 풀림, 또는 물결무늬의 봉제선이 있을 수 있습니다. 이는 솜을 넣어 수작업으로 마감하며 발생하는 자연스러운 현상으로 불량 사유가 되지 않는 점 유의 부탁드립니다.',
    ],
    customOptions: [],
    relatedProducts: ['키링인형', '소형얼굴쿠션', '말랑얼굴쿠션'],
  },

  // 페이퍼토이
  {
    category: '토이',
    name: '페이퍼토이',
    price: { option: 'default', price: 5000 },
    description: '조아용 DIY종이완구예요. 뜯어서 조립이 가능해요~ ',
    thumbnailImage: 'https://ibb.co/FXqW3Z0',
    specifications: {
      specImage: 'https://ibb.co/FXqW3Z0',
      specDetails: {
        name: '페이퍼토이',
        extra: {
          features: '종이 (모조 180g)',
          characteristics: '뜯어서 조립가능, 목공풀 사용권장',
        },
      },
      images: [
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
      ],
    },
    options: [
      {
        optionName: '그린',
        optionColor: '#0a9742',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
    ],
    configurationOptions: [
      {
        option: '표지 1장 + 페이퍼토이 2장 OPP 포장',
        optionImageUrl: 'https://ibb.co/FXqW3Z0',
      },
    ],
    cautions: [
      '목공풀 사용을 권장합니다.',
      '뜯어서 조립시 찢어지지 않도록 조심하세요.',
      '사용자의 부주의로 인한 제품 파손, 부속물의 부분 교환 등의 교환, 반품은 불가합니다.',
    ],
    customOptions: [],
    relatedProducts: ['아크릴스탠드'],
  },

  // 아크릴스탠드 - 조아용, 수줍어용, 화나용
  {
    category: '토이',
    name: '아크릴스탠드',
    price: { option: 'default', price: 5000 },
    description:
      '조아용의 다양한 모습이 그려진 아크릴 스탠드! 언제 어디서나 조아용과 함께해용!',
    thumbnailImage: 'https://ibb.co/FXqW3Z0',
    specifications: {
      specImage: 'https://ibb.co/FXqW3Z0',
      specDetails: {
        name: '아크릴스탠드',
        extra: {
          features: '아크릴',
          thickness: '10T',
          characteristics: '조아용, 수줍어용은 양면 / 화나용은 단면',
        },
      },
      images: [
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
      ],
    },
    options: [
      {
        optionName: '조아용',
        optionPattern: 'https://ibb.co/FXqW3Z0',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '수줍어용',
        optionPattern: 'https://ibb.co/FXqW3Z0',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '화나용',
        optionPattern: 'https://ibb.co/FXqW3Z0',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
    ],
    configurationOptions: [],
    cautions: [
      '아크릴 제품은 비닐을 꼭 벗기고 사용하여 주시기 바랍니다.',
      '불에 직접 닿거나 가까이 하지 마십시오.',
      '화기, 직사광선, 고온, 습기가 많은 곳을 피해 보관해주세요.',
      '상품의 실제 색감은 모니터의 해상도, 조명에 따라 다소 차이가 있을 수 있습니다.',
      '사용자의 부주의로 인한 제품 파손, 부분 교환 등의 교환, 반품은 불가합니다.',
    ],
    customOptions: [],
    relatedProducts: ['아크릴스탠드'],
  },

  // 얼굴 풍선
  {
    category: '토이',
    name: '얼굴풍선',
    price: { option: 'default', price: 4500 },
    description: '',
    thumbnailImage: 'https://ibb.co/FXqW3Z0',
    specifications: {
      specImage: 'https://ibb.co/FXqW3Z0',
      specDetails: {
        name: '얼굴풍선',
        extra: {
          features: '아크릴',
          thickness: '10T',
          characteristics: '조아용, 수줍어용은 양면 / 화나용은 단면',
        },
      },
      images: [
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
      ],
    },
    options: [
      {
        optionName: '민트',
        optionColor: '#5afadb',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
    ],
    configurationOptions: [],
    cautions: [
      '불에 직접 닿거나 가까이 하지 마십시오.',
      '화기, 직사광선, 고온, 습기가 많은 곳을 피해 보관해주세요.',
      '상품의 실제 색감은 모니터의 해상도, 조명에 따라 다소 차이가 있을 수 있습니다.',
      '사용자의 부주의로 인한 제품 파손, 부분 교환 등의 교환, 반품은 불가합니다.',
    ],
    customOptions: [],
    relatedProducts: ['아크릴스탠드'],
  },

  /** 잡화 */
  // 아크릴 키링 - 조아용, 수줍어용, 화나용, 응원해용, 축하해용, 잘자용, 노래해용, 골프해용, 사랑해용, 조아용, 수줍어용, 높이뛰어용, 높이뛰어용(세로형), 사랑해용, 화나용
  {
    category: '잡화',
    name: '아크릴 키링',
    price: { option: 'default', price: 3500 },
    description: '귀여운 조아용을 열쇠나 가방에 달아보아용~',
    thumbnailImage: 'https://ibb.co/FXqW3Z0',
    specifications: {
      specImage: 'https://ibb.co/FXqW3Z0',
      specDetails: {
        name: '아크릴 키링',
        extra: {
          features: '아크릴',
          thickness: '3mm',
        },
      },
      images: [
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
      ],
    },
    options: [
      {
        optionName: '조아용',
        optionPattern: 'https://ibb.co/FXqW3Z0',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '수줍어용',
        optionPattern: 'https://ibb.co/FXqW3Z0',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '화나용',
        optionPattern: 'https://ibb.co/FXqW3Z0',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '응원해용',
        optionPattern: 'https://ibb.co/FXqW3Z0',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '축하해용',
        optionPattern: 'https://ibb.co/FXqW3Z0',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '잘자용',
        optionPattern: 'https://ibb.co/FXqW3Z0',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '노래해용',
        optionPattern: 'https://ibb.co/FXqW3Z0',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '골프해용',
        optionPattern: 'https://ibb.co/FXqW3Z0',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '사랑해용',
        optionPattern: 'https://ibb.co/FXqW3Z0',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '조아용',
        optionPattern: 'https://ibb.co/FXqW3Z0',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '수줍어용',
        optionPattern: 'https://ibb.co/FXqW3Z0',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '높이뛰어용',
        optionPattern: 'https://ibb.co/FXqW3Z0',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '높이뛰어용(세로형)',
        optionPattern: 'https://ibb.co/FXqW3Z0',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '사랑해용',
        optionPattern: 'https://ibb.co/FXqW3Z0',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '화나용',
        optionPattern: 'https://ibb.co/FXqW3Z0',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
    ],
    configurationOptions: [],
    cautions: [
      '아크릴 제품은 비닐을 꼭 벗기고 사용하여 주시기 바랍니다.',
      '작은 부품을 포함하고 있어 3세 미만의 어린이는 사용할 수 없으며, 각별한 주의가 필요합니다.',
      '인쇄 공정에 따른 제품 별 색상 차이가 있을 수 있습니다.',
      '인쇄 공정에 따라 1~2mm의 인쇄 밀림이나 찍힘 현상이 있을 수 있습니다.',
      '불에 직접 닿거나 가까이 하지 마십시오.',
      '상품의 실제 색감은 모니터의 해상도, 조명에 따라 다소 차이가 있을 수 있습니다.',
      '사용자의 부주의로 인한 제품 파손, 부분 교환 등의 교환, 반품은 불가합니다.',
    ],
    customOptions: [],
    relatedProducts: ['아크릴스탠드'],
  },

  // 그립 홀더
  {
    category: '잡화',
    name: '그립 홀더',
    price: { option: 'default', price: 5500 },
    description: '귀여운 조아용을 내 스마트폰에 착!',
    thumbnailImage: 'https://ibb.co/FXqW3Z0',
    specifications: {
      specImage: 'https://ibb.co/FXqW3Z0',
      specDetails: {
        name: '그립 홀더',
        extra: {
          features: '아크릴 에폭시 (스티커 접착식)',
          thickness: '3mm',
        },
      },
      images: [
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
      ],
    },
    options: [
      {
        optionName: '조아용',
        optionPattern: 'https://ibb.co/FXqW3Z0',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '수줍어용',
        optionPattern: 'https://ibb.co/FXqW3Z0',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '높이뛰어용',
        optionPattern: 'https://ibb.co/FXqW3Z0',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '높이뛰어용(세로형)',
        optionPattern: 'https://ibb.co/FXqW3Z0',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '사랑해용',
        optionPattern: 'https://ibb.co/FXqW3Z0',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '화나용',
        optionPattern: 'https://ibb.co/FXqW3Z0',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
    ],
    configurationOptions: [],
    cautions: [
      '불에 직접 닿거나 가까이 하지 마십시오.',
      '화기, 직사광선, 고온, 습기가 많은 곳을 피해 보관하십시오.',
      '인쇄 공정에 따라 1~2mm의 인쇄 밀림이나 찍힘 현상, 혹은 제품 별 색상 차이가 있을 수 있습니다.',
      '상품의 실제 색감은 모니터의 해상도, 조명에 따라 다소 차이가 있을 수 있습니다.',
      '사용자의 부주의로 인한 제품 파손, 부분 교환 등의 교환, 반품은 불가합니다.',
    ],
    customOptions: [],
    relatedProducts: ['아크릴스탠드'],
  },

  // 금속 뱃지
  {
    category: '잡화',
    name: '금속뱃지',
    price: { option: 'default', price: 8000 },
    description: '귀여운 조아용을 내 스마트폰에 착!',
    thumbnailImage: 'https://ibb.co/FXqW3Z0',
    specifications: {
      specImage: 'https://ibb.co/FXqW3Z0',
      specDetails: {
        name: '금속뱃지',
        extra: {
          features: '아크릴 에폭시 (스티커 접착식)',
          thickness: '3mm',
        },
      },
      images: [
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
      ],
    },
    options: [
      {
        optionName: '조아용',
        optionPattern: 'https://ibb.co/FXqW3Z0',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
    ],
    configurationOptions: [],
    cautions: [
      '불에 직접 닿거나 가까이 하지 마십시오.',
      '화기, 직사광선, 고온, 습기가 많은 곳을 피해 보관하십시오.',
      '인쇄 공정에 따라 1~2mm의 인쇄 밀림이나 찍힘 현상, 혹은 제품 별 색상 차이가 있을 수 있습니다.',
      '상품의 실제 색감은 모니터의 해상도, 조명에 따라 다소 차이가 있을 수 있습니다.',
      '사용자의 부주의로 인한 제품 파손, 부분 교환 등의 교환, 반품은 불가합니다.',
    ],
    customOptions: [],
    relatedProducts: ['아크릴스탠드'],
  },

  // 도어 가드
  {
    category: '잡화',
    name: '도어가드',
    price: { option: 'default', price: 4500 },
    description: '조아용 차량용 도어가드입니다. 문콕 방지용~',
    thumbnailImage: 'https://ibb.co/FXqW3Z0',
    specifications: {
      specImage: 'https://ibb.co/FXqW3Z0',
      specDetails: {
        name: '도어가드',
        extra: {
          features: '실리콘',
          thickness: '80mm',
        },
      },
      images: [
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
      ],
    },
    options: [
      {
        optionName: '그린',
        optionColor: '#46d7d0',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
    ],
    configurationOptions: [
      { option: '차량용 2개입', optionImageUrl: 'https://ibb.co/FXqW3Z0' },
    ],
    cautions: [
      '설치하기 전 먼지와 물기를 깨끗이 닦고 설치 후 30초간 꾹 눌러주세요.',
      '설치후 24시간은 물에 닿지 마세요.',
      '상품의 실제 색감은 모니터의 해상도, 조명에 따라 다소 차이가 있을 수 있습니다.',
      '사용자의 부주의로 인한 제품 파손, 부분 교환 등의 교환, 반품은 불가합니다.',
    ],
    customOptions: [],
    relatedProducts: ['아크릴스탠드'],
  },

  // 네임택
  {
    category: '잡화',
    name: '네임택',
    price: { option: 'default', price: 5000 },
    description:
      '신학기 필수품~ 귀여운 조아용 이름표 입니다. 뒷면에 이름, 연락처, 주소를 메모할 수 있어요. 다양하게 사용하기 조아용~',
    thumbnailImage: 'https://ibb.co/FXqW3Z0',
    specifications: {
      specImage: 'https://ibb.co/FXqW3Z0',
      specDetails: {
        name: '네임택',
        extra: {
          features: '실리콘',
          thickness: '10mm',
        },
      },
      images: [
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
      ],
    },
    options: [
      {
        optionName: '그린',
        optionColor: '#6edab2',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
    ],
    configurationOptions: [],
    cautions: [
      '스트랩을 잘 끼워서 사용하세요.',
      '상품 특성상 미세한 칠번짐, 스크래치 등은 교환이나 반품이 불가합니다.',
      '상품의 실제 색감은 모니터의 해상도, 조명에 따라 다소 차이가 있을 수 있습니다.',
      '사용자의 부주의로 인한 제품 파손, 부분 교환 등의 교환, 반품은 불가합니다.',
    ],
    customOptions: [],
    relatedProducts: ['아크릴스탠드'],
  },

  // 미러 키링
  {
    category: '잡화',
    name: '미러키링',
    price: { option: 'default', price: 5000 },
    description:
      '귀여운 조아용이 그려진 한 손에 쏙 들어오는 미러 키링과 하프 미러 키링이예용~',
    thumbnailImage: 'https://ibb.co/FXqW3Z0',
    specifications: {
      specImage: 'https://ibb.co/FXqW3Z0',
      specDetails: {
        name: '미러키링',
        extra: {
          features: '아크릴',
          thickness: '3T',
        },
      },
      images: [
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
      ],
    },
    options: [
      {
        optionName: '조아용',
        optionPattern: 'https://ibb.co/FXqW3Z0',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '수줍어용',
        optionPattern: 'https://ibb.co/FXqW3Z0',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
    ],
    configurationOptions: [],
    cautions: [
      '불에 직접 닿거나 가까이 하지 마십시오.',
      '아크릴 제품은 비닐을 꼭 벗기고 사용하여 주시기 바랍니다.',
      '화기, 직사광선, 고온, 습기가 많은 곳을 피해 보관해주세요.',
      '상품의 실제 색감은 모니터의 해상도, 조명에 따라 다소 차이가 있을 수 있습니다.',
      '사용자의 부주의로 인한 제품 파손, 부분 교환 등의 교환, 반품은 불가합니다.',
    ],
    customOptions: [],
    relatedProducts: ['아크릴스탠드'],
  },

  // 젤심볼펜
  {
    category: '잡화',
    name: '젤심볼펜',
    price: [
      {
        option: '1P',
        price: 2800,
      },
      {
        option: '5P',
        price: 13000,
      },
    ],
    description:
      '귀여운 조아용이 달려있는 볼펜이에요! 부드러운 필기감으로 신학기에도 함께 해용!',
    thumbnailImage: 'https://ibb.co/FXqW3Z0',
    specifications: {
      specImage: 'https://ibb.co/FXqW3Z0',
      specDetails: {
        name: '젤심볼펜',
        extra: {
          features: '아크릴, ABS',
          thickness: '0.5mm (검정 잉크)',
        },
      },
      images: [
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
      ],
    },
    options: [
      {
        optionName: '핑크',
        optionColor: '#ce3c69',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '화이트',
        optionColor: '#fff',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '옐로우',
        optionColor: '#ffe75f',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '그린',
        optionColor: '#25995a',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '네이비',
        optionColor: '#1c3456',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
    ],
    configurationOptions: [
      {
        option: '1P',
        optionImageUrl: 'https://ibb.co/FXqW3Z0',
      },
      {
        option: '5P',
        optionImageUrl: 'https://ibb.co/FXqW3Z0',
      },
    ],
    cautions: [
      '불에 직접 닿거나 가까이 하지 마십시오.',
      '아크릴 제품은 비닐을 꼭 벗기고 사용하여 주시기 바랍니다.',
      '화기, 직사광선, 고온, 습기가 많은 곳을 피해 보관해주세요.',
      '상품의 실제 색감은 모니터의 해상도, 조명에 따라 다소 차이가 있을 수 있습니다.',
      '사용자의 부주의로 인한 제품 파손, 부분 교환 등의 교환, 반품은 불가합니다.',
    ],
    customOptions: [
      {
        option: '로고 인쇄',
        MOQ: 1000,
        duration: '시안 확정 후 3주',
      },
    ],
    relatedProducts: ['아크릴스탠드'],
  },

  // 엘자 파일
  {
    category: '잡화',
    name: '엘자파일',
    price: { option: 'default', price: 1000 },
    description: '조아용 클리어 엘자 파일입니다~! 신학기는 조아용과 함께 해용~',
    thumbnailImage: 'https://ibb.co/FXqW3Z0',
    specifications: {
      specImage: 'https://ibb.co/FXqW3Z0',
      specDetails: {
        name: '엘자파일',
        extra: {
          features: '플라스틱(PP)',
        },
      },
      images: [
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
      ],
    },
    options: [
      {
        optionName: '민트',
        optionColor: '#b7e5c9',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '스카이',
        optionColor: '#aeddef',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '팝콘',
        optionColor: '#fff',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '옐로우',
        optionColor: '#f7e6a0',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '레드',
        optionColor: '#f5a4c5',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '블루',
        optionColor: '#9ad5e7',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
    ],
    configurationOptions: [],
    cautions: [
      '불에 직접 닿거나 가까이 하지 마십시오.',
      '고온, 직사광선에 장시간 노출될 경우 재질 특성상 제품의 변형 또는 변색이 일어날 수 있습니다.',
      '모서리나 재단면에 찔리거나 베이지 않도록 주의해주세요.',
      '상품의 실제 색감은 모니터의 해상도, 조명에 따라 다소 차이가 있을 수 있습니다.',
      '사용자의 부주의로 인한 제품 파손, 부분 교환 등의 교환, 반품은 불가합니다.',
    ],
    customOptions: [
      {
        option: '로고 인쇄',
        MOQ: 500,
        duration: '시안 확정 후 2주, OPP 포장 시 추가 소요',
      },
    ],
    relatedProducts: ['아크릴스탠드'],
  },

  // 스티커 3종
  {
    category: '잡화',
    name: '스티커 3종',
    price: [
      {
        option: 'ver1',
        price: 2000,
      },
      {
        option: 'ver2',
        price: 3000,
      },
    ],
    description: '',
    thumbnailImage: 'https://ibb.co/FXqW3Z0',
    specifications: {
      specImage: 'https://ibb.co/FXqW3Z0',
      specDetails: {
        name: '스티커 3종',
        extra: {
          features: '',
        },
      },
      images: [
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
      ],
    },
    options: [
      {
        optionName: 'ver1',
        optionPattern: 'https://ibb.co/FXqW3Z0',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: 'ver2',
        optionPattern: 'https://ibb.co/FXqW3Z0',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
    ],
    configurationOptions: [],
    cautions: [
      '불에 직접 닿거나 가까이 하지 마십시오.',
      '고온, 직사광선에 장시간 노출될 경우 재질 특성상 제품의 변형 또는 변색이 일어날 수 있습니다.',
      '모서리나 재단면에 찔리거나 베이지 않도록 주의해주세요.',
      '상품의 실제 색감은 모니터의 해상도, 조명에 따라 다소 차이가 있을 수 있습니다.',
      '사용자의 부주의로 인한 제품 파손, 부분 교환 등의 교환, 반품은 불가합니다.',
    ],
    customOptions: [],
    relatedProducts: ['아크릴스탠드'],
  },

  // 접착 메모지
  {
    category: '잡화',
    name: '점착 메모지',
    price: { option: 'default', price: 1500 },
    description:
      '필기할 때나 다이어리 등을 꾸밀 때 다양한 용도로 붙여서 사용해 보아용~',
    thumbnailImage: 'https://ibb.co/FXqW3Z0',
    specifications: {
      specImage: 'https://ibb.co/FXqW3Z0',
      specDetails: {
        name: '점착 메모지',
        extra: {
          features: '종이',
          sheets: '50매',
        },
      },
      images: [
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
      ],
    },
    options: [
      {
        optionName: 'ver1',
        optionPattern: 'https://ibb.co/FXqW3Z0',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: 'ver2',
        optionPattern: 'https://ibb.co/FXqW3Z0',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
    ],
    configurationOptions: [],
    cautions: [
      '불에 직접 닿거나 가까이 하지 마십시오.',
      '고온, 직사광선에 장시간 노출될 경우 재질 특성상 제품의 변형 또는 변색이 일어날 수 있습니다.',
      '모서리나 재단면에 찔리거나 베이지 않도록 주의해주세요.',
      '상품의 실제 색감은 모니터의 해상도, 조명에 따라 다소 차이가 있을 수 있습니다.',
      '사용자의 부주의로 인한 제품 파손, 부분 교환 등의 교환, 반품은 불가합니다.',
    ],
    customOptions: [],
    relatedProducts: ['아크릴스탠드'],
  },

  // 세로형 떡메모지
  {
    category: '잡화',
    name: '세로형 떡메모지',
    price: { option: 'default', price: 1500 },
    description:
      '조아용이 그려져있는 떡 메모지 3종이에요. 다이어리를 꾸밀 때도, 공부를 할 때도 조아용과 함께 해볼까용~',
    thumbnailImage: 'https://ibb.co/FXqW3Z0',
    specifications: {
      specImage: 'https://ibb.co/FXqW3Z0',
      specDetails: {
        name: '세로형 떡메모지',
        extra: {
          features: '종이',
          sheets: '총 50매',
        },
      },
      images: [
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
      ],
    },
    options: [
      {
        optionName: '줄',
        optionPattern: 'https://ibb.co/FXqW3Z0',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '모눈',
        optionPattern: 'https://ibb.co/FXqW3Z0',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '무지',
        optionPattern: 'https://ibb.co/FXqW3Z0',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
    ],
    configurationOptions: [],
    cautions: [
      '본 제품은 뜯어서 사용하는 비점착 메모 패드 입니다.',
      '불에 직접 닿거나 가까이 하지 마십시오.',
      '고온, 직사광선에 장시간 노출될 경우 재질 특성상 제품의 변형 또는 변색이 일어날 수 있습니다.',
      '모서리나 재단면에 찔리거나 베이지 않도록 주의해주세요.',
      '상품의 실제 색감은 모니터의 해상도, 조명에 따라 다소 차이가 있을 수 있습니다.',
      '사용자의 부주의로 인한 제품 파손, 부분 교환 등의 교환, 반품은 불가합니다.',
    ],
    customOptions: [],
    relatedProducts: ['아크릴스탠드'],
  },

  // 마우스 장패드
  {
    category: '잡화',
    name: '마우스 장패드',
    price: { option: 'default', price: 14000 },
    description:
      '조아용이 그려져있는 책상용 대형 장패드에용! 80x30cm의 대형 크기로 조아용과 함께 책상을 정리해용~',
    thumbnailImage: 'https://ibb.co/FXqW3Z0',
    specifications: {
      specImage: 'https://ibb.co/FXqW3Z0',
      specDetails: {
        name: '마우스 장패드',
        extra: {
          features: 'PVC 고무 재질 / 폴리에스테르',
          characteristics: '생활 방수 / 스크래치 방지',
        },
      },
      images: [
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
      ],
    },
    options: [
      {
        optionName: '그린',
        optionColor: '#8bcfba',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '베이지',
        optionColor: '#e6e1dd',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
    ],
    configurationOptions: [],
    cautions: [
      '용도 외 사용하지 마십시오.',
      '불에 직접 닿거나 가까이 하지 마십시오.',
      '고온, 직사광선에 장시간 노출될 경우 재질 특성상 제품의 변형 또는 변색이 일어날 수 있습니다.',
      '모서리나 재단면에 찔리거나 베이지 않도록 주의해주세요.',
      '상품의 실제 색감은 모니터의 해상도, 조명에 따라 다소 차이가 있을 수 있습니다.',
      '사용자의 부주의로 인한 제품 파손, 부분 교환 등의 교환, 반품은 불가합니다.',
    ],
    customOptions: [],
    relatedProducts: ['아크릴스탠드'],
  },

  // 마우스 단패드
  {
    category: '잡화',
    name: '마우스 단패드',
    price: { option: 'default', price: 4000 },
    description:
      '귀여운 크기의 마우스 단패드로 사무실에서도, 집에서도 조아용으로 귀여움을 장착해보세용~',
    thumbnailImage: 'https://ibb.co/FXqW3Z0',
    specifications: {
      specImage: 'https://ibb.co/FXqW3Z0',
      specDetails: {
        name: '마우스 단패드',
        extra: {
          features: 'PVC 고무 재질',
          characteristics: '생활 방수 / 스크래치 방지',
        },
      },
      images: [
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
      ],
    },
    options: [
      {
        optionName: '그린',
        optionColor: '#4bc596',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '팝콘',
        optionColor: '#fcdfa5',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
    ],
    configurationOptions: [],
    cautions: [
      '용도 외 사용하지 마십시오.',
      '불에 직접 닿거나 가까이 하지 마십시오.',
      '고온, 직사광선에 장시간 노출될 경우 재질 특성상 제품의 변형 또는 변색이 일어날 수 있습니다.',
      '모서리나 재단면에 찔리거나 베이지 않도록 주의해주세요.',
      '상품의 실제 색감은 모니터의 해상도, 조명에 따라 다소 차이가 있을 수 있습니다.',
      '사용자의 부주의로 인한 제품 파손, 부분 교환 등의 교환, 반품은 불가합니다.',
    ],
    customOptions: [],
    relatedProducts: ['아크릴스탠드'],
  },

  // 단품 카드
  {
    category: '잡화',
    name: '단품 카드',
    price: { option: 'default', price: 600 },
    description: '조아용 카드 한 장에 소중한 마음을 가득 담아 전해보세용~',
    thumbnailImage: 'https://ibb.co/FXqW3Z0',
    specifications: {
      specImage: 'https://ibb.co/FXqW3Z0',
      specDetails: {
        name: '단품 카드',
        extra: {
          features: '종이',
          characteristics: '생활 방수 / 스크래치 방지',
        },
      },
      images: [
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
      ],
    },
    options: [
      {
        optionName: '감사해용 (옐로우)',
        optionPattern: 'https://ibb.co/FXqW3Z0',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '감사해용 (화이트)',
        optionPattern: 'https://ibb.co/FXqW3Z0',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '고마워용',
        optionPattern: 'https://ibb.co/FXqW3Z0',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '사랑해용',
        optionPattern: 'https://ibb.co/FXqW3Z0',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '축하해용',
        optionPattern: 'https://ibb.co/FXqW3Z0',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '행복해용',
        optionPattern: 'https://ibb.co/FXqW3Z0',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
    ],
    configurationOptions: [],
    cautions: [
      '불에 직접 닿거나 가까이 하지 마십시오.',
      '고온, 직사광선, 습기가 많은 곳에 보관하지 마세요.',
      '모서리나 재단면에 찔리거나 베이지 않도록 주의해주세요.',
      '상품의 실제 색감은 모니터의 해상도, 조명에 따라 다소 차이가 있을 수 있습니다.',
      '사용자의 부주의로 인한 제품 파손, 부분 교환 등의 교환, 반품은 불가합니다.',
    ],
    customOptions: [],
    relatedProducts: ['아크릴스탠드'],
  },

  // 스프링 노트
  {
    category: '잡화',
    name: '스프링 노트',
    price: { option: 'default', price: 3000 },
    description:
      '득템하고 싶은 귀여운 스프링 노트! 연습장, 알림장, 필기노트 등 다양하게 사용해 볼까용?',
    thumbnailImage: 'https://ibb.co/FXqW3Z0',
    specifications: {
      specImage: 'https://ibb.co/FXqW3Z0',
      specDetails: {
        name: '스프링 노트',
        extra: {
          features: '종이 등',
          characteristics: '스프링 제본',
          sheets: '50매',
          innerSheets: '라인 간격 8mm',
        },
      },
      images: [
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
      ],
    },
    options: [
      {
        optionName: '핑크',
        optionColor: '#f9d1dc',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '그린',
        optionColor: '#c0ddad',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
    ],
    configurationOptions: [
      { option: 'default', optionImageUrl: 'https://ibb.co/FXqW3Z0' },
    ],
    cautions: [
      '불에 직접 닿거나 가까이 하지 마십시오.',
      '고온, 직사광선, 습기가 많은 곳에 보관하지 마세요.',
      '모서리나 재단면에 찔리거나 베이지 않도록 주의해주세요.',
      '상품의 실제 색감은 모니터의 해상도, 조명에 따라 다소 차이가 있을 수 있습니다.',
      '사용자의 부주의로 인한 제품 파손, 부분 교환 등의 교환, 반품은 불가합니다.',
    ],
    customOptions: [],
    relatedProducts: ['아크릴스탠드'],
  },

  // 아크릴 자
  {
    category: '잡화',
    name: '아크릴 자',
    price: [
      {
        option: '10cm',
        price: 2500,
      },
      {
        option: '12cm',
        price: 3500,
      },
      {
        option: '15cm',
        price: 4000,
      },
    ],
    description:
      '특별하고 귀여운 자를 찾고 계신가용? 조아용 그려진 아크릴 자를 구매해보세요!',
    thumbnailImage: 'https://ibb.co/FXqW3Z0',
    specifications: {
      specImage: 'https://ibb.co/FXqW3Z0',
      specDetails: {
        name: '아크릴 자',
        extra: {
          features: '아크릴',
          characteristics: '10cm, 15cm 양면 / 12cm 단면',
        },
      },
      images: [
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
      ],
    },
    options: [
      {
        optionName: '10cm',
        optionColor: '#fff',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '12cm',
        optionColor: '#fff',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '15cm',
        optionColor: '#fff',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
    ],
    configurationOptions: [
      { option: 'default', optionImageUrl: 'https://ibb.co/FXqW3Z0' },
    ],
    cautions: [
      '아크릴 제품은 비닐을 꼭 벗기고 사용하여 주시기 바랍니다.',
      '불에 직접 닿거나 가까이 하지 마십시오.',
      '고온, 직사광선, 습기가 많은 곳에 보관하지 마세요.',
      '모서리나 재단면에 찔리거나 베이지 않도록 주의해주세요.',
      '상품의 실제 색감은 모니터의 해상도, 조명에 따라 다소 차이가 있을 수 있습니다.',
      '사용자의 부주의로 인한 제품 파손, 부분 교환 등의 교환, 반품은 불가합니다.',
    ],
    customOptions: [],
    relatedProducts: ['아크릴스탠드'],
  },

  /** 리빙 */
  // 장바구니
  {
    category: '리빙',
    name: '장바구니',
    price: [
      {
        option: 'normal',
        price: 8000,
      },
      {
        option: 'sale',
        price: 4000,
      },
    ],
    description:
      '깜찍한 조아용 장바구니와 함께 장보는 즐거움을~ 쏘옥 접어서 언제 어디서나 간편하게 보관할 수 있어용~',
    thumbnailImage: 'https://ibb.co/FXqW3Z0',
    specifications: {
      specImage: 'https://ibb.co/FXqW3Z0',
      specDetails: {
        name: '장바구니',
        extra: {
          features: '나일론',
          characteristics: '',
        },
      },
      images: [
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
      ],
    },
    options: [
      {
        optionName: '옐로우',
        optionColor: '#ece9d6',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '핑크',
        optionColor: '#f3adc9',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
    ],
    configurationOptions: [
      { option: 'default', optionImageUrl: 'https://ibb.co/FXqW3Z0' },
    ],
    cautions: [
      '표백제나 표백 성분이 있는 세제는 사용하지 마세요.',
      '불에 직접 닿거나 가까이 하지 마십시오.',
      '기름기가 있는 곳에서 사용시 오염될 수 있으므로 가능한 피해주세요.',
      '물에 오랫동안 담궈두면 물빠짐, 이염 등이 발생할 수 있으니 주의하세요.',
      '고온, 직사광선, 습기가 많은 곳에 보관하지 마세요.',
      '상품의 실제 색감은 모니터의 해상도, 조명에 따라 다소 차이가 있을 수 있습니다.',
      '사용자의 부주의로 인한 제품 파손, 부분 교환 등의 교환, 반품은 불가합니다.',
    ],
    customOptions: [],
    relatedProducts: ['아크릴스탠드'],
  },

  // 머그컵
  {
    category: '리빙',
    name: '머그컵',
    price: { option: 'default', price: 7000 },
    description: '귀여운 조아용 머그컵과 함께 나만의 카페를 즐겨보세용~',
    thumbnailImage: 'https://ibb.co/FXqW3Z0',
    specifications: {
      specImage: 'https://ibb.co/FXqW3Z0',
      specDetails: {
        name: '머그컵',
        extra: {
          features: '도자기재',
          characteristics: '전자레인지, 식기세척기 사용 가능',
        },
      },
      images: [
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
      ],
    },
    options: [],
    configurationOptions: [
      { option: 'default', optionImageUrl: 'https://ibb.co/FXqW3Z0' },
    ],
    cautions: [
      '영유아의 손이 닿지 않는 곳에 보관하시기 바랍니다.',
      '외부 충격을 가할 시 변형 및 파손될 수 있으니 주의하시기 바랍니다.',
      '제품 공정상 검은 점이나 작은 이물질, 미세한 요철, 찍힌 부분, 기포, 돌기, 유약의 흐름 및 번짐 등이 있을 수 있습니다. 이는 도자기 제품 공정 과정상 자연스러운 현상으로 불량 사유가 되지 않습니다.',
      '상품의 실제 색감은 모니터의 해상도, 조명에 따라 다소 차이가 있을 수 있습니다.',
      '사용자의 부주의로 인한 제품 파손, 부분 교환 등의 교환, 반품은 불가합니다.',
    ],
    customOptions: [],
    relatedProducts: ['아크릴스탠드'],
  },

  // 핸들 소주잔
  {
    category: '리빙',
    name: '핸들 소주잔',
    price: [
      {
        option: '1P',
        price: 3500,
      },
      {
        option: '4P',
        price: 13000,
      },
    ],
    description:
      '조아용의 응원메시지를 담은 귀여운 소주잔! 이렇게 사랑스러운 유리잔은 처음이죵?',
    thumbnailImage: 'https://ibb.co/FXqW3Z0',
    specifications: {
      specImage: 'https://ibb.co/FXqW3Z0',
      specDetails: {
        name: '핸들 소주잔',
        extra: {
          features: '유리 재질',
          ml: '50ml',
        },
      },
      images: [
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
      ],
    },
    options: [
      {
        optionName: '행복',
        optionPattern: 'https://ibb.co/FXqW3Z0',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '함께',
        optionPattern: 'https://ibb.co/FXqW3Z0',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '응원',
        optionPattern: 'https://ibb.co/FXqW3Z0',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '수고',
        optionPattern: 'https://ibb.co/FXqW3Z0',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
    ],
    configurationOptions: [
      {
        option: '1P',
        optionImageUrl: 'https://ibb.co/FXqW3Z0',
      },
      {
        option: '4P',
        optionImageUrl: 'https://ibb.co/FXqW3Z0',
      },
    ],
    cautions: [
      '외부 충격에 의한 파손 및 변형에 주의하시기 바랍니다.',
      '급열과 급랭으로 인한 파손 및 변형에 주의하시기 바랍니다.',
      '전자레인지 및 오븐, 식기세척기 사용을 금지합니다.',
      '제품에 금이나 균열이 있을 경우 사용을 중지해 주십시오.',
      '세척 시 철이나 아크릴 수세미, 또는 연마제 사용을 금지해 주십시오.',
      '제품 공정 상 표면의 기포, 작은 요철, 찍힘 등이 있을 수 있습니다. 이는 도자 공정 상 자연스러운 현상으로 불량 사유가 되지 않는 점 유의 부탁드립니다.',
      '상품의 실제 색감은 모니터의 해상도, 조명에 따라 다소 차이가 있을 수 있습니다.',
      '사용자의 부주의로 인한 제품 파손, 부분 교환 등의 교환, 반품은 불가합니다.',
    ],
    customOptions: [],
    relatedProducts: ['캔 유리컵', '파티컵'],
  },

  // 캔 유리컵
  {
    category: '리빙',
    name: '캔 유리컵',
    price: { option: 'default', price: 8000 },
    description:
      '조아용 캔 유리컵과 함께 홈카페를 즐겨볼까용? 투명한 글라스에 다양한 음료를 감성 있게 담아보아용!',
    thumbnailImage: 'https://ibb.co/FXqW3Z0',
    specifications: {
      specImage: 'https://ibb.co/FXqW3Z0',
      specDetails: {
        name: '캔 유리컵',
        extra: {
          features: '유리 재질',
          ml: '460ml',
        },
      },
      images: [
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
      ],
    },
    options: [
      {
        optionName: '우주',
        optionPattern: 'https://ibb.co/FXqW3Z0',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '팝콘',
        optionPattern: 'https://ibb.co/FXqW3Z0',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
    ],
    configurationOptions: [
      {
        option: 'default',
        optionImageUrl: 'https://ibb.co/FXqW3Z0',
      },
    ],
    cautions: [
      '외부 충격에 의한 파손 및 변형에 주의하시기 바랍니다.',
      '급열과 급랭으로 인한 파손 및 변형에 주의하시기 바랍니다.',
      '전자레인지 및 오븐, 식기세척기 사용을 금지합니다.',
      '제품에 금이나 균열이 있을 경우 사용을 중지해 주십시오.',
      '세척 시 철이나 아크릴 수세미, 또는 연마제 사용을 금지해 주십시오.',
      '상품의 실제 색감은 모니터의 해상도, 조명에 따라 다소 차이가 있을 수 있습니다.',
      '사용자의 부주의로 인한 제품 파손, 부분 교환 등의 교환, 반품은 불가합니다.',
    ],
    customOptions: [],
    relatedProducts: ['핸들 소주잔', '파티컵'],
  },

  // 파티컵
  {
    category: '리빙',
    name: '파티컵',
    price: { option: 'default', price: 2500 },
    description:
      '재사용할 수 있는 세미 텀블러 조아용 파티컵입니다. 언제 어디서나 가볍게 사용할 수 있어용~',
    thumbnailImage: 'https://ibb.co/FXqW3Z0',
    specifications: {
      specImage: 'https://ibb.co/FXqW3Z0',
      specDetails: {
        name: '파티컵',
        extra: {
          features: 'BPA FREE  플라스틱',
          ml: '500ml',
          characteristics: '재사용 가능한 리유저블 세미 텀블러',
        },
      },
      images: [
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
      ],
    },
    options: [
      {
        optionName: '옐로우',
        optionColor: '#f1af01',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '화이트',
        optionColor: '#fff',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
    ],
    configurationOptions: [
      {
        option: 'default',
        optionImageUrl: 'https://ibb.co/FXqW3Z0',
      },
    ],
    cautions: [
      '가스레인지, 오븐 등 열기를 직접적으로 받으면 제품이 녹을 수 있습니다.',
      '전자레인지 및 오븐, 식기세척기 사용을 금지합니다.',
      '미세한 기스나 흠집은 공정상 발생할 수 있는 자연스러운 현상이므로 불량이 아닙니다.',
      '뜨거운 음료를 담을 경우 반드시 홀더를 사용하시기 바랍니다.',
      '파티컵 음용구 덮개 부분이 날카로울 수 있으니 개봉시 주의하시기 바랍니다.',
      '상품의 실제 색감은 모니터의 해상도, 조명에 따라 다소 차이가 있을 수 있습니다.',
      '사용자의 부주의로 인한 제품 파손, 부분 교환 등의 교환, 반품은 불가합니다.',
    ],
    customOptions: [],
    relatedProducts: ['핸들 소주잔', '캔 유리컵'],
  },

  // 무릎 담요
  {
    category: '리빙',
    name: '무릎 담요',
    price: { option: 'default', price: 10000 },
    description: '',
    thumbnailImage: 'https://ibb.co/FXqW3Z0',
    specifications: {
      specImage: 'https://ibb.co/FXqW3Z0',
      specDetails: {
        name: '무릎 담요',
        extra: {
          features: '',
          characteristics: '재사용 가능한 리유저블 세미 텀블러',
        },
      },
      images: [
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
      ],
    },
    options: [
      {
        optionName: '그린',
        optionColor: '',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '스카이',
        optionColor: '',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
    ],
    configurationOptions: [
      {
        option: 'default',
        optionImageUrl: 'https://ibb.co/FXqW3Z0',
      },
    ],
    cautions: [
      '상품의 실제 색감은 모니터의 해상도, 조명에 따라 다소 차이가 있을 수 있습니다.',
      '사용자의 부주의로 인한 제품 파손, 부분 교환 등의 교환, 반품은 불가합니다.',
    ],
    customOptions: [],
    relatedProducts: ['핸들 소주잔', '캔 유리컵'],
  },

  /** 봉제 */
  // 광목 장바구니
  {
    category: '봉제',
    name: '광목 장바구니',
    price: { option: 'default', price: 4000 },
    description:
      '부드러운 광목 소재의 장바구니예요. 다양도로 사용할 수 있어용~',
    thumbnailImage: 'https://ibb.co/FXqW3Z0',
    specifications: {
      specImage: 'https://ibb.co/FXqW3Z0',
      specDetails: {
        name: '광목 장바구니',
        extra: {
          features: '얇고 부드러운 광목',
          characteristics: '조아용 그림은 랜덤입니다.',
        },
      },
      images: [
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
      ],
    },
    options: [
      {
        optionName: 'default',
        optionColor: '#dcd7c4',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
    ],
    configurationOptions: [],
    cautions: [
      '미지근한 물에 중성세제를 사용하여 뒤집어서 단독으로 손세탁하십시오. (표백제 사용 불가, 드라이클리닝 불가)',
      '심하게 비틀어 짜지 마시고, 그늘에서 자연건조 하십시오.',
      '프린트 부분은 다림질하지 마십시오.',
      '상품의 실제 색감은 모니터의 해상도, 조명에 따라 다소 차이가 있을 수 있습니다.',
      '사용자의 부주의로 인한 제품 파손, 부분 교환 등의 교환, 반품은 불가합니다.',
    ],
    customOptions: [
      {
        option: '프린팅 변경',
        duration: '시안 확정 후 최소 4주',
        characteristics: '유선으로 문의해주세요.',
      },
    ],
    relatedProducts: [],
  },

  // 광목 파우치
  {
    category: '봉제',
    name: '광목 파우치',
    price: [
      {
        option: '소',
        price: 3000,
      },
      {
        option: '중',
        price: 3500,
      },
      {
        option: '대',
        price: 4000,
      },
    ],
    description:
      '양 쪽의 스트랩을 조여주면 귀여운 조아용 스트링 파우치가 된답니당! 부드러운 광목 재질의 파우치에 여러 가지 물건들을 담아보아용',
    thumbnailImage: 'https://ibb.co/FXqW3Z0',
    specifications: {
      specImage: 'https://ibb.co/FXqW3Z0',
      specDetails: {
        name: '광목 파우치',
        extra: {
          features: '얇고 부드러운 광목',
          characteristics: '조아용 그림은 랜덤입니다.',
        },
      },
      images: [
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
      ],
    },
    options: [
      {
        optionName: '소',
        optionColor: '#dcd7c4',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '중',
        optionColor: '#dcd7c4',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '대',
        optionColor: '#dcd7c4',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
    ],
    configurationOptions: [],
    cautions: [
      '미지근한 물에 중성세제를 사용하여 뒤집어서 단독으로 손세탁하십시오. (표백제 사용 불가, 드라이클리닝 불가)',
      '심하게 비틀어 짜지 마시고, 그늘에서 자연건조 하십시오.',
      '프린트 부분은 다림질하지 마십시오.',
      '상품의 실제 색감은 모니터의 해상도, 조명에 따라 다소 차이가 있을 수 있습니다.',
      '사용자의 부주의로 인한 제품 파손, 부분 교환 등의 교환, 반품은 불가합니다.',
    ],
    customOptions: [
      {
        option: '프린팅 변경',
        duration: '시안 확정 후 최소 4주',
        characteristics: '유선으로 문의해주세요.',
      },
    ],
    relatedProducts: [],
  },

  // 리사이클 에코백
  {
    category: '봉제',
    name: '리사이클 에코백',
    price: [
      {
        option: '중',
        price: 8000,
      },
      {
        option: '대',
        price: 10000,
      },
    ],
    description:
      '리사이클 원단을 사용하여 친환경적이며 가볍고 생활방수가 가능해요',
    thumbnailImage: 'https://ibb.co/FXqW3Z0',
    specifications: {
      specImage: 'https://ibb.co/FXqW3Z0',
      specDetails: {
        name: '리사이클 에코백',
        extra: {
          features: '폴리에스테르 100% (리사이클 원단)',
          characteristics: '지퍼 색상과 조아용 도안은 랜덤입니다.',
        },
      },
      images: [
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
      ],
    },
    options: [
      {
        optionName: '베이지',
        optionColor: '#dcd7c4',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '그레이그린',
        optionColor: '#7e7868',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '브라운',
        optionColor: '#402a1d',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '네이비',
        optionColor: '#1d2235',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
    ],
    configurationOptions: [
      {
        option: 'default',
        optionImageUrl: 'https://ibb.co/FXqW3Z0',
      },
    ],
    cautions: [
      '세탁을 권장하지 않으며 오염 시 차가운 물수건으로 바로 닦아주세요.',
      '화기, 직사광선 및 고온은 피해주십시오.',
      '제품의 손상이 우려되므로 세탁기, 건조기, 다리미, 드라이클리닝은 금하여 주십시오.',
      '상품의 실제 색감은 모니터의 해상도, 조명에 따라 다소 차이가 있을 수 있습니다.',
      '사용자의 부주의로 인한 제품 파손, 부분 교환 등의 교환, 반품은 불가합니다.',
    ],
    customOptions: [
      {
        option: '프린팅 변경',
        duration: '시안 확정 후 최소 4주',
        characteristics: '유선으로 문의해주세요.',
      },
    ],
    relatedProducts: [],
  },

  // 리사이클 다용도 파우치
  {
    category: '봉제',
    name: '리사이클 다용도 파우치',
    price: { option: 'default', price: 6000 },
    description:
      '작은 소지품을 보관할 수 있는 조아용 다용도 파우치입니다. 리사이클 원단을 사용하여 친환경적이며 가볍고 생활방수가 가능해요. 화장품이나 카드 보관 등 다용도로 활용할 수 있어용',
    thumbnailImage: 'https://ibb.co/FXqW3Z0',
    specifications: {
      specImage: 'https://ibb.co/FXqW3Z0',
      specDetails: {
        name: '리사이클 다용도 파우치',
        extra: {
          features: '폴리에스테르 100% (리사이클 원단)',
          characteristics: '지퍼 색상과 조아용 도안은 랜덤입니다.',
        },
      },
      images: [
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
      ],
    },
    options: [
      {
        optionName: '베이지',
        optionColor: '#dcd7c4',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '그레이그린',
        optionColor: '#7e7868',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '브라운',
        optionColor: '#402a1d',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '네이비',
        optionColor: '#1d2235',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
    ],
    configurationOptions: [
      {
        option: 'default',
        optionImageUrl: 'https://ibb.co/FXqW3Z0',
      },
    ],
    cautions: [
      '세탁을 권장하지 않으며 오염 시 차가운 물수건으로 바로 닦아주세요.',
      '화기, 직사광선 및 고온은 피해주십시오.',
      '제품의 손상이 우려되므로 세탁기, 건조기, 다리미, 드라이클리닝은 금하여 주십시오.',
      '상품의 실제 색감은 모니터의 해상도, 조명에 따라 다소 차이가 있을 수 있습니다.',
      '사용자의 부주의로 인한 제품 파손, 부분 교환 등의 교환, 반품은 불가합니다.',
    ],
    customOptions: [
      {
        option: '프린팅 변경',
        duration: '시안 확정 후 최소 4주',
        characteristics: '유선으로 문의해주세요.',
      },
    ],
    relatedProducts: [],
  },

  // 리사이클 화장품 파우치
  {
    category: '봉제',
    name: '리사이클 화장품 파우치',
    price: { option: 'default', price: 6000 },
    description:
      '화장품, 지갑 등 간단한 소품을 조아용 화장품 파우치에 보관해보아용~ 리사이클 원단을 사용하여 친환경적이며 가볍고 생활방수가 가능해요. 화장품이나 카드 보관 등 다용도로 활용할 수 있어용',
    thumbnailImage: 'https://ibb.co/FXqW3Z0',
    specifications: {
      specImage: 'https://ibb.co/FXqW3Z0',
      specDetails: {
        name: '리사이클 화장품 파우치',
        extra: {
          features: '폴리에스테르 100% (리사이클 원단)',
          characteristics: '지퍼 색상과 조아용 도안은 랜덤입니다.',
        },
      },
      images: [
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
      ],
    },
    options: [
      {
        optionName: '베이지',
        optionColor: '#dcd7c4',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '그레이그린',
        optionColor: '#7e7868',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '브라운',
        optionColor: '#402a1d',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '네이비',
        optionColor: '#1d2235',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
    ],
    configurationOptions: [
      {
        option: 'default',
        optionImageUrl: 'https://ibb.co/FXqW3Z0',
      },
    ],
    cautions: [
      '세탁을 권장하지 않으며 오염 시 차가운 물수건으로 바로 닦아주세요.',
      '화기, 직사광선 및 고온은 피해주십시오.',
      '제품의 손상이 우려되므로 세탁기, 건조기, 다리미, 드라이클리닝은 금하여 주십시오.',
      '상품의 실제 색감은 모니터의 해상도, 조명에 따라 다소 차이가 있을 수 있습니다.',
      '사용자의 부주의로 인한 제품 파손, 부분 교환 등의 교환, 반품은 불가합니다.',
    ],
    customOptions: [
      {
        option: '프린팅 변경',
        duration: '시안 확정 후 최소 4주',
        characteristics: '유선으로 문의해주세요.',
      },
    ],
    relatedProducts: [],
  },

  // 리사이클 카드 지갑
  {
    category: '봉제',
    name: '리사이클 카드 지갑',
    price: { option: 'default', price: 4000 },
    description: '',
    thumbnailImage: 'https://ibb.co/FXqW3Z0',
    specifications: {
      specImage: 'https://ibb.co/FXqW3Z0',
      specDetails: {
        name: '리사이클 카드 지갑',
        extra: {
          features: '폴리에스테르 100% (리사이클 원단)',
          characteristics: '지퍼 색상과 조아용 도안은 랜덤입니다.',
        },
      },
      images: [
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
      ],
    },
    options: [
      {
        optionName: '베이지',
        optionColor: '#dcd7c4',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '그레이그린',
        optionColor: '#7e7868',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '브라운',
        optionColor: '#402a1d',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '네이비',
        optionColor: '#1d2235',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
    ],
    configurationOptions: [
      {
        option: 'default',
        optionImageUrl: 'https://ibb.co/FXqW3Z0',
      },
    ],
    cautions: [
      '세탁을 권장하지 않으며 오염 시 차가운 물수건으로 바로 닦아주세요.',
      '화기, 직사광선 및 고온은 피해주십시오.',
      '제품의 손상이 우려되므로 세탁기, 건조기, 다리미, 드라이클리닝은 금하여 주십시오.',
      '상품의 실제 색감은 모니터의 해상도, 조명에 따라 다소 차이가 있을 수 있습니다.',
      '사용자의 부주의로 인한 제품 파손, 부분 교환 등의 교환, 반품은 불가합니다.',
    ],
    customOptions: [
      {
        option: '프린팅 변경',
        duration: '시안 확정 후 최소 4주',
        characteristics: '유선으로 문의해주세요.',
      },
    ],
    relatedProducts: [],
  },

  // 리사이클 텀블러 파우치
  {
    category: '봉제',
    name: '리사이클 텀블러 파우치',
    price: { option: 'default', price: 7000 },
    description: '',
    thumbnailImage: 'https://ibb.co/FXqW3Z0',
    specifications: {
      specImage: 'https://ibb.co/FXqW3Z0',
      specDetails: {
        name: '리사이클 텀블러 파우치',
        extra: {
          features: '폴리에스테르 100% (리사이클 원단)',
          characteristics: '지퍼 색상과 조아용 도안은 랜덤입니다.',
        },
      },
      images: [
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
      ],
    },
    options: [
      {
        optionName: '베이지',
        optionColor: '#dcd7c4',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '그레이그린',
        optionColor: '#7e7868',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '브라운',
        optionColor: '#402a1d',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '네이비',
        optionColor: '#1d2235',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
    ],
    configurationOptions: [
      {
        option: 'default',
        optionImageUrl: 'https://ibb.co/FXqW3Z0',
      },
    ],
    cautions: [
      '세탁을 권장하지 않으며 오염 시 차가운 물수건으로 바로 닦아주세요.',
      '화기, 직사광선 및 고온은 피해주십시오.',
      '제품의 손상이 우려되므로 세탁기, 건조기, 다리미, 드라이클리닝은 금하여 주십시오.',
      '상품의 실제 색감은 모니터의 해상도, 조명에 따라 다소 차이가 있을 수 있습니다.',
      '사용자의 부주의로 인한 제품 파손, 부분 교환 등의 교환, 반품은 불가합니다.',
    ],
    customOptions: [
      {
        option: '프린팅 변경',
        duration: '시안 확정 후 최소 4주',
        characteristics: '유선으로 문의해주세요.',
      },
    ],
    relatedProducts: [],
  },

  // 리사이클 손가방
  {
    category: '봉제',
    name: '리사이클 손가방',
    price: { option: 'default', price: 10000 },
    description: '',
    thumbnailImage: 'https://ibb.co/FXqW3Z0',
    specifications: {
      specImage: 'https://ibb.co/FXqW3Z0',
      specDetails: {
        name: '리사이클 손가방',
        extra: {
          features: '폴리에스테르 100% (리사이클 원단)',
          characteristics: '지퍼 색상과 조아용 도안은 랜덤입니다.',
        },
      },
      images: [
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
      ],
    },
    options: [
      {
        optionName: '베이지',
        optionColor: '#dcd7c4',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '그레이그린',
        optionColor: '#7e7868',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '브라운',
        optionColor: '#402a1d',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: '네이비',
        optionColor: '#1d2235',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
    ],
    configurationOptions: [
      {
        option: 'default',
        optionImageUrl: 'https://ibb.co/FXqW3Z0',
      },
    ],
    cautions: [
      '세탁을 권장하지 않으며 오염 시 차가운 물수건으로 바로 닦아주세요.',
      '화기, 직사광선 및 고온은 피해주십시오.',
      '제품의 손상이 우려되므로 세탁기, 건조기, 다리미, 드라이클리닝은 금하여 주십시오.',
      '상품의 실제 색감은 모니터의 해상도, 조명에 따라 다소 차이가 있을 수 있습니다.',
      '사용자의 부주의로 인한 제품 파손, 부분 교환 등의 교환, 반품은 불가합니다.',
    ],
    customOptions: [
      {
        option: '프린팅 변경',
        duration: '시안 확정 후 최소 4주',
        characteristics: '유선으로 문의해주세요.',
      },
    ],
    relatedProducts: [],
  },

  /** 패키지 */
  // 쇼핑백
  {
    category: '포장',
    name: '조아용 쇼핑백',
    price: [
      {
        option: 'mini-컬러',
        price: 1000,
      },
      {
        option: 'S-컬러 (귀여워용)',
        price: 1200,
      },
      {
        option: 'S-컬러 (수줍어용)',
        price: 1200,
      },
      {
        option: 'S-크라프트',
        price: 1200,
      },
      {
        option: 'L-크라프트',
        price: 1800,
      },
    ],
    description:
      '귀여운 조아용 가방에 선물을 담아 소중한 분들에게 선물해보아용~!',
    thumbnailImage: 'https://ibb.co/FXqW3Z0',
    specifications: {
      specImage: 'https://ibb.co/FXqW3Z0',
      specDetails: {
        name: '조아용 쇼핑백',
        extra: {
          features: '종이',
          characteristics: '',
        },
      },
      images: [
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
        'https://ibb.co/FXqW3Z0',
      ],
    },
    options: [
      {
        optionName: 'mini-컬러',
        optionPattern: 'https://ibb.co/FXqW3Z0',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: 'S-컬러 (귀여워용)',
        optionPattern: 'https://ibb.co/FXqW3Z0',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: 'S-컬러 (수줍어용)',
        optionPattern: 'https://ibb.co/FXqW3Z0',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: 'S-크라프트',
        optionPattern: 'https://ibb.co/FXqW3Z0',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
      {
        optionName: 'L-크라프트',
        optionPattern: 'https://ibb.co/FXqW3Z0',
        optionImage: 'https://ibb.co/FXqW3Z0',
      },
    ],
    configurationOptions: [
      {
        option: 'default',
        optionImageUrl: 'https://ibb.co/FXqW3Z0',
      },
    ],
    cautions: [
      '세탁을 권장하지 않으며 오염 시 차가운 물수건으로 바로 닦아주세요.',
      '화기, 직사광선 및 고온은 피해주십시오.',
      '제품의 손상이 우려되므로 세탁기, 건조기, 다리미, 드라이클리닝은 금하여 주십시오.',
      '상품의 실제 색감은 모니터의 해상도, 조명에 따라 다소 차이가 있을 수 있습니다.',
      '사용자의 부주의로 인한 제품 파손, 부분 교환 등의 교환, 반품은 불가합니다.',
    ],
    customOptions: [
      {
        option: '프린팅 변경',
        duration: '시안 확정 후 최소 4주',
        characteristics: '유선으로 문의해주세요.',
      },
    ],
    relatedProducts: [],
  },
];

export default data;

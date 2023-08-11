import miraeImage from './images/mirae.jpeg';

export const mockData = {
  id: 1,
  title: '미래회관 마곡점',
  category: ['📍마곡 지구 상권', '펀딩 진행 중'],
  description:
    '미래회관은 와인과 고기를 분위기 있는 공간에서 즐길수 있는 와인 그릴바입니다. 브랜드 특성인 <높은 객단가> 로 예상 월매출 최소 1억 이상의 미래회관 마곡점 펀딩을 오픈합니다.',
  image: miraeImage,
  collectedAmount: 200000000,
  targetAmount: 369000000,
  fundingDate: {
    startDate: '2023-09-01T12:34:56Z',
    endDate: '2023-09-30T12:34:56Z',
  },
  storeOpenDate: '',
  averageInvestmentAmount: 25000000,
  expectedReturnRate: ['25000000', '40000000'],
  // rating: {
  //   count: 500,
  //   rate: 4.7,
  // },
};

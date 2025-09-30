// src/pages/collect/data.js

export const ITEMS = [
  {
    id: "lee-kwangho-blowup",
    title: "BLOW-UP",
    artist: "Lee Kwang-Ho",
    year: "2024",
    size: "53 × 45 cm",
    material: "Oil on canvas",
    price: 1300000, // 원화(또는 에디션) 가격: 원 단위 숫자
    image: "/images/collect/blowup.jpg",
    note:
      "“BLOW-UP” 시리즈는 형상에 근접해 들어가며 확대한 시선과 붓질의 결을 통해 감각적 밀도를 탐구합니다.",
  },
  {
    id: "kys-book",
    title: "Kim Yun Shin",
    artist: "Kim Yun Shin",
    year: "2023",
    size: "Book · 240p",
    material: "Hardcover",
    price: 120000,
    image: "/images/collect/kys_book.jpg",
    note:
      "작가의 조각 세계 전반을 정리한 도록. 초기부터 최근에 이르는 대표작과 인터뷰, 평문을 수록합니다.",
  },
  {
    id: "jina-park-humanlights",
    title: "HUMAN LIGHTS",
    artist: "Jina Park",
    year: "2025",
    size: "29.7 × 21 cm",
    material: "Photobook",
    price: 28000,
    image: "/images/collect/jinapark.jpg",
    note:
      "도시의 빛과 인물을 응시하는 작가의 시선을 담은 사진집. 잔광처럼 남는 정서가 페이지마다 이어집니다.",
  },
  // ...필요한 만큼 계속 추가
];

export function getItemById(id) {
  return ITEMS.find((it) => it.id === id);
}

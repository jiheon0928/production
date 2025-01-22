// const menu = [
//   {
//     name: "부대찌개",
//     price: 13000,
//     Kcal: 700,
//     ingredients: ["햄", "라면", "파", "두부", "콩"],
//   },
//   {
//     name: "죽",
//     price: 4000,
//     Kcal: 200,
//     ingredients: ["소고기", "밥", "물"],
//   },
//   {
//     name: "샌드위치",
//     price: 0,
//     Kcal: 400,
//     ingredients: ["고구마", "참치", "빵", "치즈"],
//   },
//   {
//     name: "해장국",
//     price: 10000,
//     Kcal: 700,
//     ingredients: ["뼈다귀", "시래기", "감자", "수제비"],
//   },
// ];

// const a = menu.map((aa) => {
//   aa.Kcal = aa.Kcal + 100;
//   aa.ingredients.push("설탕");
//   return aa;
// });

// console.log(a);

// console.log(
//   menu.filter(
//     (x) => !(x.ingredients.includes("햄") || x.ingredients.includes("소고기"))
//   )
// );

const starbucks = [
  {
    name: "카페모카",
    price: 6000,
    shits: 2,
    ingredients: ["커피콩", "물", "초코"],
  },
  {
    name: "레몬에이드",
    price: 4000,
    shits: 0,
    ingredients: ["레몬", "사이다", "시럼"],
  },
  {
    name: "아메리카노",
    price: 3000,
    shits: 2,
    ingredients: ["커피콩", "물"],
  },
  {
    name: "자몽허니블랙티",
    price: 4000,
    shits: 0,
    ingredients: ["자몽", "물", "홍차"],
  },
  {
    name: "화이트초코",
    price: 5000,
    shits: 1,
    ingredients: ["커피콩", "크림", "초코", "우유", "얼음"],
  },
];

// console.log(starbucks.filter((x) => !x.ingredients.includes("커피콩")));

// console.log(
//   starbucks.map((x) => {
//     x.ingredients.includes("커피콩")
//       ? (x.price = x.price * 0.8)
//       : (x.price = x.price);
//     return x;
//   })
// );

console.log(
  starbucks.map((x) => {
    !x.ingredients.includes("꿀")
      ? (x.name = x.name + "꿀💙") &&
        x.ingredients.push("꿀") &&
        (x.price = x.price + 300)
      : x;
    return x;
  })
);

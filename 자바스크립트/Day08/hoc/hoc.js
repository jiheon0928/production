// const arr = [1, 3, 5, 7, 9];

// arr.map((x) => x + 1);

// const ren = Array(101)
//   .fill(0)
//   .map((x, i) => i)
//   .filter((i) => {
//     return i % 5 == 0;
//   });
// console.log(ren);

// const ren1 = Array(101)
//   .fill(0)
//   .map((x, y) => y)
//   .map((x) =>
//     x % 3 == 0
//       ? x + "🤖"
//       : x % 5 == 0 && x % 3 == 0
//       ? x + "💙"
//       : x % 3 == 0
//       ? x + "🧨"
//       : x
//   );

// console.log(ren1);

const makeZodiac = (to, from) => {
  const zodidc = {
    0: "원숭이",
    1: "닭",
    2: "개",
    3: "돼지",
    4: "쥐",
    5: "소",
    6: "호랑이",
    7: "토끼",
    8: "용",
    9: "뱀",
    10: "말",
    11: "양",
  };

  return Array(from - to)
    .fill(0)
    .map((v, i) => i + to)
    .map((v) => {
      return { 연도: v, 띠: zodidc[v % 12] };
    });
};

const result = makeZodiac(1000, 3000);
console.log(result);

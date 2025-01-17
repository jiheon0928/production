const food = prompt("좋아하는 음식은???");
const place = prompt("최근에 갔던 장보는?????");

alert(`최근에 갔던${place}에서 먹은 ${food}가 먹고 싶다`);

const stature = Number(prompt("키는? cm"));
const weight = Number(prompt("몸무게는??"));

const stature2 = stature * 0.01 * (stature * 0.01);
const bmi = weight / stature2;

alert(`비만 지수는${bmi}입니다`);

const exchange_rate = Number(prompt("오늘의 환율은?"));
const exchange = Number(prompt("얼마 바꾸쉴?"));
const result = exchange * exchange_rate;
alert(`${result}원 환전 해드렸습니다`);

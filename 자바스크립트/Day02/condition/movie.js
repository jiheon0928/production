/*
1번영화 10000원
2번영화 8000원
3번 영화 9000원


13세 미만 50퍼
60세 초과 30퍼
그외 다 내라
*/
const movie = Number(prompt("영화 번호 선택"));
const price =
  movie == 1
    ? 10000
    : movie == 2
    ? 8000
    : movie == 3
    ? 9000
    : prompt("다시입력");

const age = Number(prompt("나이는?"));
const sale = age > 13 ? 0.5 : age > 60 ? 0.7 : 1;

const price2 = price * sale;
alert(price2);

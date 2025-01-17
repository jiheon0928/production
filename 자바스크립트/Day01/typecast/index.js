const name = window.prompt("너의 이름은");
const age = window.prompt("너의 나이는");
const color = window.prompt("최애 색은");

window.alert(`제이름은 ${name}, 나이는 ${age}, 좋아하는 색은 ${color}입니다`);

const date = window.prompt("날짜는");
const plane = window.prompt("계획은?");

window.alert(`${date}에 설정한 계획은 ${plane}입니다`);

const num1 = Number(prompt("일번"));
const num2 = Number(prompt("두번"));

const re1 = num1 + num2;
const re2 = num1 - num2;

prompt(`${re1}`);
prompt(`${re2}`);

const food = Number(prompt("얼마"));
const num3 = Number(prompt("몇개"));

const cc = food * num3;
prompt(`${cc}`);

const sum = prompt("섭시몇도");
const sum2 = Number(sum) * 1.8 + 32;

prompt(`${sum2}화씨입니다`);

const bb = Number(prompt("한변은?"));
const bbb = bb * bb;

prompt(`${bbb}정사각형 넓이다`);

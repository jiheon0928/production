/*
const road = Number(prompt("어디까지 갈래??"));
const road_no1 =
  road == 1 ? 1200 : road == 2 ? 2000 : road == 3 ? 1000 : "처음부터 다시";

const age = Number(prompt("몇살이니??"));
const age2 = age <= 7 ? 0 : 8 <= age && age <= 19 ? 0.7 : age >= 65 ? 0 : 1;

alert(`요금은 ${age2 * road_no1} 입니다.`);
*/

const movie_num = prompt("모볼래??");
const age = prompt("몇살이니");
const movie = [10000, 8000, 9000];

if (age < 13) alert(`가격은 ${movie[movie_num - 1] * 0.5}원 입니다`);
else if (age > 59) alert(`가격은 ${movie[movie_num - 1] * 0.7}원 입니다`);
else alert(`가격은 ${movie[movie_num - 1]}원 입니다`);

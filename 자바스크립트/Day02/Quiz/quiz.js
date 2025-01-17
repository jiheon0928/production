const key = Number(prompt(`키가 몇>>`));
const key2 = 140 < key ? "탑승가능" : "탑승 불가능";
alert(key2);

const ss = Number(prompt("숫자입력"));
const ss2 = ss % 2 == 1 ? "홀수" : "짝수";
alert(ss2);

const birth = Number(prompt("태어난 년은??"));
const birth2 = 2025 - birth + 1;
const birth3 = 20 < birth2 ? "성인" : "미성년자";
alert(birth3);

const sec = Number(prompt("시입력"));
const sec2 = Number(prompt("분입력"));
const sec3 = Number(prompt("초입력"));
const sec4 = sec * 3600 + sec2 * 60 + sec3;
alert(`총 초는 ${sec4}입니다`);

const bb = prompt("첫번째");
const bb2 = prompt(`두번째`);
const bb3 = bb > bb2 ? bb : bb2;
alert(bb3);

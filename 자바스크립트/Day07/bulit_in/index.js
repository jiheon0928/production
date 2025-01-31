const a = new Date();

const date = a.getDate();
const day = a.getDay();
const hour = a.getHours();
const month = a.getMonth();
console.log({ date, day, hour, month });

const iso = a.toISOString();
const locale = a.toLocaleString();
const date1 = a.toLocaleDateString();
const time = a.toLocaleTimeString();
console.log({ iso, locale, date1, time });

const absolute = Math.abs(-10); //절대값
const max = Mate.max(1, 123, 323, 141, 123, 4123); //최댓값
const min = Mate.min(123, 12, 2, 1, 4, 123, 412, 2, 3, 1); // 최솟값

const ceil = Math.ceil(3.14); //올림
const floor = Math.round(3.4); //내림
const round = Math.round(3.4); //반올림

const ran = Math.random(); // 0 <= x < 1
const test = Math.floor(Math.randum() * 10);

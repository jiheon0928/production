// const arr = [1, 3, 5, 7, 9];

// const double = (a) => a * 2;
// const plus = (a) => a + 10;

// -----------------------------------------------------

// const square = (a) => (a ** 2 < 10 ? "짜장면" : "탕수육");
// const square3 = (a) => (`${a ** 3}`.length < 3 ? "커피" : "붕어빵");
// const a = arr.map(square3);
// console.log(a);

// -----------------------------------------------------------

// const fruits = [
//   "peach",
//   "mango",
//   "strawberry",
//   "apple",
//   "orange",
//   "mandarin",
//   " plum",
//   "fig",
// ];

// const len = (a) => (`${a}`.length < 6 ? a + "💙" : a + "❤️‍🔥");
// console.log(fruits.map(len));

// const word = (name) =>
//   `${name}`.length * 2 < 15 ? "과일이름 짦음" : "과일이름 김";

// console.log(fruits.map(word));

// -----------------------------------------------------------
// const three = (a) => a == 3;
// const b = (a) => a % 2 == 0;
// const a = arr.some(b);
// console.log(a);

// const check = (a) => `${a}`.slice(0, 1);
// const len = (a) => `${a}`.length >= 4 && `${a}`.length >= 12;
// const aaa = (a) =>
//   `${a}`.includes("i") || `${a}`.includes("o") || `${a}`.includes("u")
//     ? "💙"
//     : "🧨";

// console.log(fruits.some(check));
// console.log(fruits.every(len));
// console.log(fruits.map(aaa));

// const song = `Ooh
// I, I just woke up from a dream
// Where you and I had to say goodbye
// And I don't know what it all means
// But since I survived, I realized
// Wherever you go, that's where I'll follow
// Nobody's promised tomorrow
// So I'ma love you every night like it's the last night
// Like it's the last night
// If the world was ending, I'd wanna be next to you
// If the party was over and our time on Earth was through
// I'd wanna hold you just for a while and die with a smile
// If the world was ending, I'd wanna be next to you
// Ooh
// Oh, lost, lost in the words that we scream
// I don't even wanna do this anymore
// 'Cause you already know what you mean to me
// And our love's the only war worth fighting for
// Wherever you go, that's where I'll follow
// Nobody's promised tomorrow
// So I'ma love you every night like it's the last night
// Like it's the last night
// If the world was ending, I'd wanna be next to you
// If the party was over and our time on Earth was through
// I'd wanna hold you just for a while and die with a smile
// If the world was ending, I'd wanna be next to you
// Right next to you
// Next to you
// Right next to you
// Oh-oh, oh
// If the world was ending, I'd wanna be next to you
// If the party was over and our time on Earth was through
// I'd wanna hold you just for a while and die with a smile
// If the world was ending, I'd wanna be next to you
// If the world was ending, I'd wanna be next to you
// Ooh
// I'd wanna be next to you`;

// const song_list = song.split(" ");
// const b = (a) => (a.length > 6 ? "💛" : a);
// const aa = song_list.map(b);
// console.log(aa);

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sixOver = (num) => 5 < num;
console.log(numArr.filter(sixOver));

const square = numArr.filter((x) => x ** 2 < 100).map((x) => x + 10);

console.log(square);

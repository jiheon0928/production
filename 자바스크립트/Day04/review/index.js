const mbti = prompt("당신의 mbti는??");

const first = mbti.slice(0, 1).toUpperCase();
const second = mbti.slice(1, 2).toUpperCase();
const third = mbti.slice(2, 3).toUpperCase();
const fourth = mbti.slice(3, 4).toUpperCase();

const mbtiobj = {
  E: "외향적",
  I: "내향적",
  S: "감각적",
  N: "직관적",
  T: "이성적",
  F: "감성적",
  J: "계획적",
  P: "즉흥적",
};

alert(
  `${mbtiobj[first]} ${mbtiobj[second]} ${mbtiobj[third]} ${mbtiobj[fourth]}`
);

const email = prompt("이메일 입력");
const hasAt = email.includes("@");
const hasDot = email.includes(".com") || email.includes(".net");
const hasDomain =
  email.includes("naver") ||
  email.includes("kakao") ||
  email.includes("YAHOO") ||
  email.includes("paran");

hasAt && hasDot && hasDomain ? alert("이메일 타당함") : alert("이메일 부적합");

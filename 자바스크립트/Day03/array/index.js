const menu = ["아메리카노", "블루베리요거트스무디", "딸기요거트스무디"];

const soccer = ["손흥민", "황희찬", "이강인", "김민재"];

//배열 관련된 연산자

const test = [menu, soccer];
//indexing 연산자 -> 꺼내기
console.log(test[0][1]);

//destructuring  연산자 -> 배열 뿌셔뿌셔
const test1 = [...menu, ...soccer];

//Rest 연산자
const [son, ...rest] = soccer;

//추가 및 업뎃 연산자
soccer[4] = "지성퐉";
soccer[1] = "씨찬";

//delete 연산자 -> 삭제
delete soccer[3];

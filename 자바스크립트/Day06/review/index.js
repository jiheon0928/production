// const food = (imo) => imo + `pizza`;
// const word = (a) => a.repeat(3);
// const won = (c) => `${c * 0.0007}입니다.`;
// console.log(food("🍕"));

// ----------------------------------------------------

// const bus = () => console.log("버스타기");
// const taxi = () => console.log("택시타기");
// const mom_car = () => console.log("엄마찬스");

// const goToAcademy = (traffic) => {
//   console.log("집에서 출발");
//   traffic();
//   console.log("집에서 출발");
// };

// console.log(goToAcademy(bus));

// -----------------------------------------------------

const makeBeverrage = (menu) => {
  console.log(`주문 받기 \n ${menu()} \n 주문완료`);
};

const Amerricano = () => {
  console.log(
    "1.원두 갈기\n2.평탄화하기\n3.커피기계넣기\n4.버튼 클릭\n5.즙짜기"
  );
};
const smoody = () => {
  console.log("1.재료넣기");
  console.log("2.얼음넣기");
  console.log("3.갈기");
  console.log("4.즙짜기");
};

const tea = () => {
  console.log("1.티백 넣기");
  console.log("2.뜨물 넣기");
  console.log("3.후불기");
};

makeBeverrage(Amerricano);

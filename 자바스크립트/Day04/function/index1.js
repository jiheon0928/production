// //함수는 타입으로 가능

// const subway = {
//   name: "부평점",
//   sale: 0,
//   sellBread: function () {
//     this.sale = this.sale = 1000;
//   },
//   printsale: function () {
//     console.log(this.sale);
//   },
// };

const baskinRabbins = {
  icecream: [
    { name: "민트초코", price: 2000 },
    { name: "엄마는왹계인", price: 2500 },
    { name: "슈팅스타", price: 4000 },
  ],
  sale: 0,
  sellIcecream: function (num) {
    if (this.icecream[num] == undefined) console.log("그런번호 없습니다.");
    else {
      console.log(`${this.icecream[num]}아이스크림이 판매`);
      this.sale = this.sale + this.icecream[num].price;
    }
  },
  printSale: function () {
    console.log(`현재 매출 ${this.sale}`);
  },
  addIcecram: function (name, price) {
    this.icecreams.push({ name: name, price: price });
  },
};

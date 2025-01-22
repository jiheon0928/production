// const starbucks = {
//   coffeemenu: [
//     { name: "아이스아메리카노", price: 4000 },
//     { name: "카페라떼", price: 4500 },
//     { name: "유자차", price: 4000 },
//   ],
//   sold: 0,
//   cafesell: function (num) {
//     this.coffeemenu + this.coffeemenu[num].price;
//   },

//   menupush: function (name, price) {
//     this.coffeemenu.push({ name: name, price: price });
//   },
// };

// menupush("아망추", 5000);
// const c = starbucks.coffeemenu;
// console.log(c);

const magician = {
  HP: 100,
  MP: 100,
  LV: 1,
  EXP: 0,
  getexp: function (EXP) {
    console.log(`현재 경험치 ${this.EXP} 현재 레벨 ${this.LV}`);
    if (this.EXP >= 100) {
      this.LV = this.LV + 1;
      this.EXP = this.EXP - 100;
    }
  },
  magicclaw: function () {
    if (this.MP < 10) {
      console.log(`현재마나부족`);
    } else {
      this.MP = this.MP - 10;
      this.EXP = this.EXP + 10;
      this.getexp(this.EXP);
      console.log(`매직클로 발동`);
    }
  },
  telepolt: function () {
    if (this.MP < 50) {
      console.log(`현재마나부족`);
    } else {
      this.MP = this.MP - 50;
      this.EXP = this.EXP + 50;
      this.getexp(this.EXP);
    }
  },
};
magician.magicclaw();
magician.magicclaw();
magician.magicclaw();
magician.magicclaw();
magician.magicclaw();
magician.magicclaw();
magician.magicclaw();
magician.magicclaw();
magician.magicclaw();
magician.magicclaw();
magician.magicclaw();

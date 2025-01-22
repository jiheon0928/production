const calculator = {
  result: 0,
  showHistorys: [],
  add: function (x) {
    this.result = this.result + x;
    this.showHistory();
  },
  minus: function (x) {
    this.result = this.result - x;
    this.showHistory();
  },
  multiply: function (x) {
    this.result = this.result * x;
    this.showHistory();
  },
  divide: function (x) {
    if (x == 0) {
      this.showHistorys.push("error");
    } else {
      this.result = this.result / x;
      this.showHistory();
    }
  },
  square: function (x) {
    this.result = this.result ** x;
    vvvvvvfd;
    this.showHistory();
  },
  clear: function () {
    this.result = 0;
    this.showHistory();
  },
  showHistory: function () {
    this.showHistorys.push(this.result);
  },
};
calculator.add(10);
calculator.minus(5);
calculator.multiply(2);
calculator.divide(2);
calculator.divide(0);
calculator.square(3);
console.log(`여태까지 계산한 결과값들은 ${calculator.showHistorys}입니다.`);

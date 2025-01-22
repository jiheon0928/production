car = {
  name: "k3",
  speed: 0,
  upspeed: function (num) {
    this.speed = this.speed + num;
    console.log(`현재 속도는 ${this.speed}`);
  },
  dowmspeed: function (num) {
    if (this.speed < num) {
      console.log(
        `현재 속도는 ${this.speed}입니다.${this.speed}만 감속 가능합니다. `
      );
    } else {
      this.speed = this.speed - num;
      console.log(`현재 속도는 ${this.speed}`);
    }
  },
  breakspeed: function () {
    this.speed = this.speed - this.speed;
    console.log(`현재 속도는 ${this.speed}`);
  },
};

car.upspeed(30);
car.dowmspeed(40);

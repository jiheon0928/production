/*const plater = {
  name: "이승엽",
  position: ["타자"],
  salary: 30000,
};

const coffee = {
  coffeName: "아메리카노",
  price: 2000,
};

const fruit = {
  type: "핸드크림",
  company: "카밀",
  price: 8000,
  ingredients: {
    first: {
      name: " 글리세리",
      chemicals: ["수소", "산소"],
    },
    second: {
      name: "미네랄 오일",
      chemicals: ["알케인", "파라핀"],
    },
  },
};

const { first } = fruit.ingredients;
const test1 = { ...fruit.ingredients.first };
console.log(test1);
*/
const laptop = {
  title: "그램",
  price: 800000,
  specs: {
    cpu: "intel i5",
    ram: "8gb",
    storage: "256gs ssd",
  },
};
const { cpu } = laptop.specs;
const { ram } = laptop.specs;
const { storage } = laptop.specs;
console.log(cpu);
console.log(ram);
console.log(storage);

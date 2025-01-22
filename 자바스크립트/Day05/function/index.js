const menu = (a) => {
  const c = ["된장국", "김치찌개", "짜파게티"];
  return c[a - 1];
};

const cook = (menu) => {
  console.log("요리시작");
  menu();
  console.log("요리끝");
};

const aaa = cook(1);
console.log(aaa);

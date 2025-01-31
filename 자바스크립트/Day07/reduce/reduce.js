[1, 2, 3, 4, 5].reduce((acc, current) => acc + current);

const coffee = "americano";
console.log(
  coffee
    .split("")
    .reduce((x, y) => x + y + "a")
    .join("")
);

const user = [
  {
    name: "aaaaa",
    age: "sfhasdfhsdl",
    price: "asdasd",
    con: "asdasd",
    color: "clack",
  },
  {
    name: "aasfasadaa",
    age: "sfhaczxczx",
    price: "asdasd",
    con: "asdasd",
    color: "clack",
  },
  {
    name: "aaasdasda",
    age: "sfhcqwcl",
    price: "asdasd",
    con: "asdasd",
    color: "clack",
  },
];
console.log(
  user.map((x) => ({
    age: x.age,
  }))
);

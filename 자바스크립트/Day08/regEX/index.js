const a = /hello/i;

const b = a.test("HELLO world!");
console.log(b);

const str = "hello world!";
const result = str.match(a);
console.log(result);

const c = /a{2,4}/; //aa,aaa,aaaa 있음??
console.log(c.test("a"));
console.log(c.test("aa"));
console.log(c.test("aaa"));
console.log(c.test("aaaa"));
console.log(c.test("aaaaa"));
console.log(c.test("aaaaaa"));

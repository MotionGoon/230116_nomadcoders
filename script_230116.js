// ---------------------------------------------------------------
// Arrays(배열);
// const arrays = ["apple", "banana", "orenge"];
// console.log(arrays[0]);
// ---------------------------------------------------------------
// Object(오브젝트);
// const player = {
//   name: "Goon",
//   points: 10,
//   Handsome: true,
//   fat: "little bit",
// };

// console.log(player.name);
// player.points = player.points + 15;
// console.log(player.points);
// ---------------------------------------------------------------
// Function(함수);
// function sayHello(nameOfPerson, age) {
//   console.log("Hello my name is " + nameOfPerson + " and I am" + age);
// }
// sayHello("goon", 10);
// sayHello("sin", 20);
// sayHello("sun", 30);

// function plus(firstNumber, secondNumber) {
//   console.log(firstNumber + secondNumber);
// }
// function divide(a, b) {
//   console.log(a / b);
// }

// plus(1, 2);
// divide(10, 2);

// const player = {
//   sayHello: function (name1) {
//     console.log("Hello my name is " + name1);
//   },
// };
// player.sayHello("Sin Jong Goon");
// player.sayHello("Kim Sun Young");

// const plus = {
//   sum: function (num1, num2) {
//     console.log(num1 + num2 + "입니다.");
//   },
// };
// plus.sum(2, 3);

// function sum1(a, b) {
//   console.log(a + b);
// }
// sum1(4, 5);

// const add1 = {
//   one: function min(as, ad) {
//     console.log(as + ad);
//   },
// };
// add1.one(5, 6);
// ---------------------------------------------------------------
const sumOne = {
  one: function sum1(a, b, c) {
    console.log(a + b + c);
  },
};
sumOne.one(1, 2, 3);

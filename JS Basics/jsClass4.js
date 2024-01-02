// // console.log('kya haaal');

// //function call or invoke
// run();

// //function declaration
// function run() {
//     console.log('running');
// }

// //Named function assignment
// let stand = function walk() {
//     console.log('walking');
// };

// //Anonymous function assignment
// let stand2 = function() {
//     console.log('walking');
// };

// stand();

// let jump = stand;

// jump();

// stand2();

// let x = 1;
// x = 'a';

// console.log(x);

// function sum() {
//   let total = 0;
//   for (let value of arguments) total = total + value;
//   return total;
//}

// console.log(sum(1, 2));
//console.log(sum(1));
// console.log(sum());
// console.log(sum(1, 2, 3, 4, 5, 6));

// let ans = sum(1,2,2,3);
// console.log(ans);

//Rest Operator

// function sum(...args) {
//   console.log(args);
// }
// sum(1, 2, 3, 4, 5, 6);

//Default paramters
// function interest(p, r, y) {
//   return (p * r * y) / 100;
// }

// console.log(interest(1000, 10, 5));

//hack hai to bypass default params
//console.log(interest(1000, undefined, 5);)

//GETTER SETTER

//getter -> access properties
//setter -> change or mutate properties

// let person = {
//   fName: "Nishant",
//   lName: "Bhadrasen",
// };

//console.log(person);

// function fullName() {
//   return `${person.fName} ${person.lName}`;
// }

// console.log(fullName());

// issue -> read only

// let person = {
//   fName: this.fName,
//   lName: this.lName,

//   get fullName() {
//     return `${person.fName} ${person.lName}`;
//   },

//   set fullName(value) {
//     if (typeof value !== String) {
//       throw new Error("Please enter a valid name");
//     }
//     let parts = value.split(" ");
//     this.fName = parts[0];
//     this.lName = parts[1];
//   },
// };

// try {
//   person.fullName = true;
// } catch (e) {
//   alert(e);
// }

// console.log(person.fullName);

// let arr = [1, 2, 3, 4];

// let totalSum = arr.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   0
// );

// console.log("Printing Total Sum");
// console.log(totalSum);

const x = "123";
console.log(typeof Number(x));

// let stand = function walk() {
//   console.log("walking");
// };
// stand();

// let rectangle = {
//   length: 1,
//   breadth: 2,

//   draw: function () {
//     console.log("Drawing rect");
//   },
// };

// function createRectangle(len, brea) {
//   let reactangle = {
//     length: len,
//     breadth: brea,

//     draw() {
//       console.log("drawing rectangle");
//     },
//   };
//   return reactangle;
// }

// let rect1 = createRectangle(5, 3);
// let rect2 = createRectangle(9, 7);

function Rectangle(len, brea) {
  this.length = len;
  this.breadth = brea;
  this.draw = function () {
    console.log("drawing");
  };
}

// let objRect = new Rectangle(5, 7);

// objRect.color = "Yellow";
// console.log(objRect);

// delete objRect.color;
// console.log(objRect);

// let Rectangle1 = new Function(
//   "length",
//   "breadth",
//   `this.length = len;
// this.breadth = brea;
// this.draw = function () {
//   console.log("drawing");`
// );

// let rect = new Rectangle1(2, 3);
// console.log(rect);

// let a = { value: 10 };
// let b = a;
// a.value++;

// console.log(a.value);
// console.log(b.value);

// let a = { value: 10 };
// inc(a);

// function inc(a) {
//   a.value++;
// }

// console.log(a);

let rectangle = {
  length: 2,
  breadth: 4,
};

//for in loop generally used for objects
// for (let key in rectangle) {
//   // keys are reflected through key variables
//   //vaues are reflected through rectangle[key]
//   console.log(key, rectangle[key]);
// }

//for-of loop generally used for itreables

// for (let key of Object.entries(rectangle)) {
//   console.log(key);
// }

if ("length3" in rectangle) {
  console.log("present");
} else {
  console.log("absent");
}

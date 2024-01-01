// let meraPromise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("I'm inside Promise 1");
//   }, 5000);
//   //resolve(2233);
//   reject("Bhai Sahab Error Occured!");
// });

// meraPromise.then(
//   (value) => {
//     console.log(value);
//   },
//   (error) => {
//     console.log("Recieved an error");
//   }
// );

// //meraPromise.catch((error) => {
// //   console.log("Recieved an error");
// // });

// console.log("Pehla");

// let waadaa1 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("setTimeout1 Started");
//   }, 2000);
//   resolve(true);
// });

// let output = waadaa1.then(() => {
//   let waadaa2 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       console.log("setTimeout 2 started");
//     }, 3000);
//     resolve("Waadaa2 resolved");
//   });
//   return waadaa2;
// });

// output.then((value) => console.log(value));

// async function abcd() {
//   return "Kya hua tera";
// }
// console.log(abcd());

// async function utility() {
//   let bhopalMausam = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Bhopal mei thand hai");
//     }, 5000);
//   });

//   let gunaMausam = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Guna is Coolest");
//     }, 7000);
//   });

//   let bM = await bhopalMausam;
//   let gM = await gunaMausam;

//   return [bM, gM];
// }

// async function utility() {
//   let content = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//   let output = await content.json();
//   console.log(output);
// }

// utility();

// async function helper() {
//   let options = {
//     method: "POST",
//     body: JSON.stringify({
//       title: "Nishant",
//       body: "Tagdi Body",
//       userId: 1999,
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   };

//   let content = await fetch(
//     "https://jsonplaceholder.typicode.com/posts",
//     options
//   );
//   let response = content.json();
//   return response;
// }

// async function utility2() {
//   let ans = await helper();
//   console.log(ans);
// }
// utility2();

let name = "Sher";
function init() {
  let name = "Mozilla"; //name is a local variable created by init
  function displayName() {
    let name = "nishant";
    //displayName() is inner function, that forms the closure
    console.log(name); //use variable declared in the parent function
  }
  displayName();
}
init();

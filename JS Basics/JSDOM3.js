// Adding 100 paras
// const t1 = performance.now();
// for (i = 0; i <= 100; i++) {
//   let newElement = document.createElement("p");
//   newElement.textContent = "This is Para" + i;

//   document.body.appendChild(newElement);
// }
// const t2 = performance.now();
// console.log("This took " + (t2 - t1) + "ms");

//optimising a bit
// const t3 = performance.now();
// let myDiv = document.createElement("div");

// for (i = 0; i <= 100; i++) {
//   let element = document.createElement("p");
//   element.textContent = "This is Para" + i;

//   myDiv.appendChild(element);
// }

// document.body.appendChild(myDiv);
// const t4 = performance.now();
// console.log("This took " + (t4 - t3) + "ms");

//Best Practice
// let fragment = document.createDocumentFragment();
// for(let i=1; i<=100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'Paragraph '+i;

//     fragment.appendChild(newElement);
// }

// document.body.appendChild(fragment); //1 Reflow and 1 Repaint

// function addPara() {
//   let para = document.createElement("p");
//   para.textContent = "JS is Single";
//   document.body.appendChild(para);
// }

// function appendNewMessage() {
//   let para = document.createElement("p");
//   para.textContent = "Kya Haal Chaal";
//   document.body.appendChild(para);
// }

// addPara();
// appendNewMessage();

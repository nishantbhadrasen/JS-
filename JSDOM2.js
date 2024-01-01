// function eventClicked() {
//   console.log("I have clicked on Page");
// }

// document.addEventListener("click", eventClicked);

//document.removeEventListener("click", eventClicked);

// const content = document.querySelector("#wrapper");

// to get information about event
// content.addEventListener("click", function (event) {
//   console.log(event);
// });

//Prevent Default Action
// let links = document.querySelectorAll("a");
// let thirdLink = links[2];

// thirdLink.addEventListener("click", function (event) {
//   event.preventDefault();
//   console.log("maza aaya, acha laga");
// });

// let myDiv = document.createElement("div");

// function paraStatus(event) {
//   console.log(" Para " + event.target.textContent);
// }

// myDiv.addEventListener("click", paraStatus);

// for (let i = 1; i <= 100; i++) {
//   let newElement = document.createElement("p");
//   newElement.textContent = "This is para " + i;
//   myDiv.appendChild(newElement);
// }

// document.body.appendChild(myDiv);

// let element = document.querySelector("wrapper");

// element.addEventListener("click", function (event) {
//   if (event.target.nodeName === "SPAN") {
//     console.log("span par click kr lia " + event.target.textContent);
//   }
// });

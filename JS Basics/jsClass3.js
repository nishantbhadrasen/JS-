// console.log('Hello Jee');

// let lastName = 'Babbar' ;

// let firstName = new String('Love');

// let message =
// `Hello ${lastName},

// Thanks for the Opportunity

// Regards,
// Babbar`;

// console.log(message);

// let words = message.split(' ');

// console.log(words);

// let date = new Date();

// let date2 = new Date('June 20 1998 07:15');

// let date3 = new Date(1998, 11, 20, 7);

// date3.setFullYear(1947);

// console.log(date3);

// let numbers = [1, 4, 5, 7];

// console.log(numbers);

// //end -> push
// //beginning -> unshift

// //middle -> splice

//Searching
// console.log(numbers);

// console.log(numbers.indexOf(9));

// //we want to check if a number exist in an array
// if (numbers.indexOf(4) != -1) console.log("present");

// console.log(numbers.includes(7));

// console.log(numbers.indexOf(4, 0));

// let courses = [
//   { no: 1, name: "Nishant" },
//   { no: 2, name: "Rahul" },
// ];
//console.log(courses);

//console.log(courses.includes({ no: 1, name: "Nishant" }));

// let course = courses.find(function (course) {
//   return course.name === "Nishant";
// });

// OR Arrow Function Notation
// let course = courses.find((course) => course.name === "Nishant");

// console.log(course);

// let numbers = [1, 2, 3, 4, 5, 6, 7];

//end
// numbers.pop();
// //console.log(numbers);

//beginnig
// numbers.shift();
// console.log(numbers);

//Middle
// numbers.splice(2, 1);
// console.log(numbers);

//Combining And Slicing Arrays

// let first = [1, 2, 3];
// let second = [4, 5, 6];
// let combinedArray = first.concat(second);
// console.log(combinedArray);

//Slicing

// let marks = [10, 20, 30, 40, 50, 60];
// let slicedMarks = marks.slice(2, 5);
// let slicedMarks = marks.slice(2); // from second index until end
// console.log(slicedMarks);

// let first = [1, 2, 3];
// let second = [4, 5, 6];

// let combined = [...first, "a", ...second, "b"];
//console.log(combined);

//copy kaise create karu
// let another = [...combined];
// console.log(another);

// let arr = [10, 20, 30, 40, 50];

// for (let value of arr) {
//   console.log(value);
// }

// arr.forEach(function (number) {
//   console.log(number);
// });

//Arrow function Notation

// arr.forEach((number) => console.log(number));

// let numbers = [10, 20, 30, 40, 50];
// const joined = numbers.join("+");
// console.log(joined);

// let message = "This is my message";

// let splitMessage = message.split(" ");

// console.log(splitMessage);

// let join = splitMessage.join("_");
// console.log(join);

// let numbers = [50, 40, 30, 20, 10];
// numbers.sort();
// console.log(numbers);

// numbers.reverse();
// console.log(numbers);

// let arr = [
//   { id: 1, name: "Nishant" },
//   { id: 2, name: "Amit" },
// ];

// arr.sort((a, b) => a.name.localeCompare( b.name));
// console.log(arr);

// let numbers = [1, 2, -1, -4, 0];
// let filtered = numbers.filter((value) => value > 0);
// console.log(filtered);

// let numbers = [1, 2, -1, -4, 0];
// console.log(numbers);
// let items = numbers.map((value) => "student_no " + value);
// console.log(items);

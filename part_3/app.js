// Loops in js
//for loop
// for(let i = 1; i<= 10; i++){
//   console.log("My name is Abdul Salam");
// }

// Calculate sum of 1 to 5
// let sum = 0;
// for (let i = 1; i <= 5; i++){
//   sum = sum + i;
// }
// console.log(sum);

// let sum = 0;
// let n = prompt("Enter Your Number :");
// for (let i = 1; i<= n; i++){
//   sum = sum + i;
// }
// console.log(sum);

// for (let i = 1; i <= 5; i++){
//   console.log("I =", i)
// }
// not use
// for(let i = 1; i>= 0; i++){
//   console.log("I = ", i);
// }

// While Loop 
// let i = 1;
// while(i<=10){
//   console.log("I =", i);
//   i++;
// }

// let sum = "My name is Abdul Salam";
// let i = 1;
// while(i<=10){
//   console.log(sum);
//   i++;
// }

// Do While Loop
// let i = 1;
// do{
//   console.log("I =", i);
//   i++;
// } while(i<=10);

// let j = 1;
// do{
//   console.log("J =", j);
//   j++;
// }while(j<=10);


// for-of loop
// let str = "My name is Abdul Salam";
// for(let i of str){
//   console.log("I =", i);
// }

// let str = "JavaScript";

// let size = 0;
// for(let val of str){
//   console.log("val =", val);
//   size++;
// }
// console.log("String size = ", size);

// for in loop

// let student = {
//   name: "Rahul Kumar",
//   age: 20,
//   cgpa: 7.5,
//   isPass: true
// };
// for(let i in student){
//   console.log(i);
// };


// Let's Practice 
// Qs1. Print all Even Number from 0 to 100.
// for(let i = 0; i <= 100; i++){
//   console.log(i);
// };
// // Event Number
// for(let i = 0; i <= 100; i++){
//   if(i%2 === 0){
//     console.log("Number =", i);
//   }
// };

// // Odd Number 
// for(let i = 0; i<= 100; i++){
//   if(i%2 !== 0){
//     console.log("Number =", i);
//   }
// };


// Qs2. 
// // create a game where you start with any random game number. ask the user to keep guessing the game number until the user ent ers correct value.

// let userNumber = prompt("Please enter your game number :");
// let gameNumber = 25;
// while(userNumber != gameNumber){
//   userNumber = prompt("You entered wrong number. Guess again : ")
// };
// console.log("Congratulations, You entered the right number");


// let number = prompt("Please Enter Your Number :");
// let user = 20;

// while(user != number){
//   number = prompt("Please Enter Your Number :");
// }
// console.log(number);

// Strings 
// let str = "My name is Abdul Salam";

// console.log(str.length)
// let name = 'My name is Abdul Salam';
// console.log(name[3]);

// Template Literals 

// let obj = {
//   item: "pen",
//   price: 10
// };

// let output =  `hte cost of ${obj.item} is ${obj.price} taka`;
// console.log(output);
// console.log('My Name is \n Abdul Salam'); // Text Line

// console.log("My Name is\tAbdul Salam");

// String Methods is js 
let name = "My nam is abdul salam";
console.log(name.toUpperCase());
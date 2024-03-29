// function myFunction(){
//   console.log("Welcome to Crazy Programming ");
//   console.log("We are Learning JS")
// }
// myFunction();

// function myFunction(msg, n){
//   // parameter -> input
//   console.log(msg * n);
// }
// myFunction("Welcome to crazy programer", 100); // argument

// Function -> 2 numbers, sum
// function sum(number1, number2){
//   console.log(number1 + number2);
// }

// sum(12, 13)

// function sum(x, y){
//   s = x + y;
//   return s;
// }
// let val = sum(12, 13);
// console.log(val)

// function functionName(param1, param1....){
  // do some work
//}


//Arrow Functions 
// Compact way of writing a function 
// const functionName = (Param1, param2....)=>{
  // do some work
// }
// sum function 
// function sum(a, b){
//   return a + b;
// }

// Multiplication function
// function mul(a, b){
//   return a * b;
// }

// const sum = (x, y)=>{
//   let s = x + y;
//   return s;
// }
// let c = sum(12,13);
// console.log(c);

// const sum = (x, y)=>{
//    s = x + y;
//   return s;
// }
// let c = prompt("Please Enter a number :")
// let b = prompt("Please Enter a number :");
// let k = sum(c, b);
// console.log(k);

// const printHello = ()=> console.log("Hello!");

// printHello();


// let's Practice 
// Qs. Create a function using the "function" keyword that takes aString as an argument & returns the number of vowels in the string.



// function countVowels(str){
//   let count = 0;
//   for(const char of str){
//    if(char === "a" || char === "e" ||char === "i" || char === "o" || char === "u"){
//     count++;
//    }
//   }
//   return count;
// };
// console.log(countVowels("crazy programmer"));

// Qs. Create an arrow function to perform the same task

// const countVowel = (str)=>{
//   let count = 0;
//   for(const char of str){
//     if(char === 'a' || char === 'e'){
//       count++;
//     }
//   };
//   return count++;
// };

// console.log(countVowel("Salam"));


// const darkmode = (str)=>{
//   if(str === 'salam'){
//     console.log("Dark mode");
//   }
//   else if(str === "kona"){
//     console.log("Light Mode ");
//   }
//   else{
//     console.log("Please Enter colot : ")
//   }
// }
// darkmode("kona");

// const userData = (str)=>{
//   let count = 0;
//   if(str === "salam"){
//     count++;
//   }

//   return count;
// }
// console.log(userData("salam"));

// const userData = (str)=>{
//   let count = 0;
//   for(const char of str){
//     if(char === "s" || char === "k"){
//       count++;
//     };
//   };
//   return count;
// };
// console.log(userData("kone salam"));

// const wordsCount = (str)=>{
//   let words = 0;
//   let textArray = Array.from(str);
//   for(let i = 0; i < textArray.length; i++){
//     if(textArray[i] === " "){
//       words++;
//     };
//   };
//   console.log(words);
// };

// wordsCount("my name is Abdul Salam. I am a Web Developer & Designer");

// let arr = ["salam", "kona", "samim"];
// arr.forEach(function printVal(val){
//   let words = 0;
//   if(val === "salam" || val=== "kona"){
//     words++;
//   };
//   console.log(words);
// });

// let arr = [1,2,3,4,5];

// arr.forEach((val)=>{
//   console.log(val);
// })

// let arr = ["pune", "delhi", "mumbai"];

// arr.forEach((val, idx, arr)=>{
//   console.log(val.toUpperCase(), idx, arr);
// });

// Let's Practice 
// Qs. For a given array of numbers, print the square of each value using the forEach loop.

// let nums = [2,3,4,5,6];

// nums.forEach((num)=>{
//   console.log(num*num);
// });

// let nums = [67, 52, 39];
// let calcSquare = (num)=>{
//   console.log(num **2);
// }
// nums.forEach(calcSquare);

// Some More Array Methods
// Map

// Creates a new array with the results of some operation. the value its callback returns are used to form new array


// let nums = [67, 52, 39];
// nums.map((val)=>{
//   console.log(val);
// });

// let newArr = nums.map((val)=>{
//   return val **2;
// })
// console.log(newArr);

// Some More Array Methods \
// Filter
// Creates a new array of elements that give true for a condition/filter
// Eg: all even elements

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let evenArr = arr.filter((val)=>{
//   return val % 2 === 0;
// });

// console.log(evenArr);



// let arr = [1,2,3,4];

// const output = arr.reduce((res, curr)=>{
//   return res + curr;
// })

// console.log(output);

// let arr = [5, 6, 8, 1, 10,101, 3];

// const output = arr.reduce((prev, curr)=>{
//   return prev > curr ? prev : curr;
// })

// console.log(output);

// Let's Practice 
// Qs. We are given array of marks of students. filter our o the marks of students that scored 90+
// let marks = [97, 64, 32, 49, 99, 96, 86];

// let toppers = marks.filter((val)=>{
//   return val > 90;
// })
// console.log(toppers);




// Qs. take a number n as input from user. Create an array of numbers from 1 to n.

// let n = prompt("Enter a Number : ");

// let arr = [];

// for(let i = 1; i< n; i++){
//   arr[i-1] = i;
// }
// console.log(arr);






// Use the reduce method to calculate sum of all numbers in the array

// let n = prompt("Enter a Number : ");

// let arr = [];

// for(let i = 1; i <= n; i++){
//   arr[i - 1] = i;
// }
// console.log(arr);

// let sum = arr.reduce((res, curr)=>{
//   return res + curr;
// })
// console.log(sum);

// Use the reduce method to calculate product of all numbers in the array

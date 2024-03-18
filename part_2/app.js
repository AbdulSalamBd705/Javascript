// Artimetic Operators
// + - * / % ++ -- ** 
// let a = 5;
// let b = 2;
// let c = a + b;
// console.log(" a + b = ", c);
// console.log(" a - b = ", a - b);
// console.log("a * b =", a * b);
// console.log("a = ", a, "&", "b =", b);
// console.log("a / b =", a/b);
// console.log("a % b =", a%b);
// console.log("a ** b =", a ** b);


// Unary Operators
// let a = 5;
// let b = 2;
// a++;
// console.log("a =", a, " & b = ", b);
// console.log("a = ", a);
// a--;
// console.log("a = ", a);



// Assignmet Operators
// = += -= *= %= **=

// let a = 5;
// let b = 2;
// a+=4; // a = a + 4;
// console.log("a = ", a);

// b-= 1; // b = b - 1;
// console.log("b =", b);

// a*=2; // a = a * 2;

// console.log("a =", a);

// b/= 2; // b = b / 2;
// console.log("b =", b);

// a%= 4; // a = a % 4;
// console.log("a =", a);

// a**=4; // a = a **4;
// console.log("a =", a)

// Comparison Operators 

// == === != !== > < >= <=
// let a = 5;
// let b = "3";

// console.log("a >= b ", a >= b);

// Logical Operators
// && || !

// let a = 6;
// let b = 7;

// console.log("a > b && a === 6", a<b && a===6); // true

// console.log("a > b || a === 6", a> b || a === 6); // true

// console.log(!(a> b)); // false

// Conditional Statements

// if else 
// let age = 20;
// if(age <= 19){
//   console.log("Can Love");
// }else if  (age <= 22){
//   console.log("You Can Mary")
// }
// else {
//   console.log("Can Not Love");
// }

// let mode = "light";
// let color;

// if( mode === "dark" ){
//   color = "black";
// }else if(mode === "light"){
//   color = "white";
// }
// console.log(color);
// let age = 16;

// if (age >= 18){
//   console.log("vote");
// }else {
//   console.log("Not avote");
// }

// odd or even 
// let num = 2;
// if(num % 2 === 0){
//   console.log(num, "is Even")
// }
// else{
//   console.log(num, "is Odd")
// }
// syntax -> rules

// let age = 61;

// if(age < 18){
//   console.log("Junior");
// }else if (age > 60){
//   console.log("Senior");
// }
// else{
//   console.log("Middle")
// }

// let mode = "pink";
// let color;

// if(mode === "dark"){
//   color = "black";
// }else if(mode === "blue"){
//   color = "blue";
// }else if(mode === "pink"){
//   color = "Pink"
// }else {
//   color  = "White"
// }

// console.log(color)

// Ternary Operators
// let age = 18;
// let result = age >= 18 ? "Abutl" : "Not Adult";

// console.log(result);

// let salam = 50;
// let kone = 50;
// let sum = salam + kone;
// let love = sum >= 100 ? `love is ${sum}%` : `love is ${sum}% not love`;
// console.log(love);

// Switch 
// const expr = "";
// switch (expr){
//   case "salam":
//     console.log("My Name Is Abdul Salam");
//     break;
//   case "kona":
//     console.log("My Lover Name Is Kona");
//   break;
//   default:
//     console.log("I'm a Single");    
// }

// let number = "50";

// switch(number){
//   case "1" :
//   console.log(`${number}% Love`);
//   break;
//   case "20" : 
//   console.log(`${number}% Love`);
//   break;
//   case "30":
//     console.log(`${number}% love`);
//   break;
//   case "50":
//   console.log(`${number}% love`);
//   break;
//   default:
//     console.log("Enter a Number");
// }


// let's Practice 
// let number = prompt("Enter a Number");
// if(number % 5 === 0){
//   console.log(number, "is a multiple of 5")
// } else {
//   console.log(number, "is Not a multiple of 5")
// }



let number = prompt("Enter a Number");
if(number >= 80 && number <= 100){
  console.log("A")
}else if(number >= 70 && number <= 79){
  console.log("B");
}
else if(number >= 60 && number <= 69){
  console.log("c")
}
else if(number >= 50 && number <= 59){
   console.log("D")
}else{
  console.log("F")
}
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
// let age = 20;
// if(age <= 19){
//   console.log("Can Love");
// }else if  (age <= 22){
//   console.log("You Can Mary")
// }
// else {
//   console.log("Can Not Love");
// }

let mode = "light";
let color;

if( mode === "dark" ){
  color = "black";
}else if(mode === "light"){
  color = "white";
}
console.log(color);
// // For loops 
// const cars = ["A", "B", "C", "D", "E"];

// for(let i = 0; i < cars.length; i++){
//   console.log(i);
// }

// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
// let text = "";

// for(let i = 0; i < cars.length; i++){
//   console.log(text +=cars[i])
// };

// let text = "*";
// for(let i = 0; i < 20; i++){
//   console.log(text)
// }
// const cars = ["Volvo", "Saab", "Ford", "Fiat", "Audi"];
// let text = "";
// for(let i = 0; i < cars.length; i++){
//   console.log(text += cars[i]);
// };

// let text = "";
// for(let i = 0; i <= 10; i++){
//   console.log(i)
// }


// For in Loops 
// const person = {fname: "John", lname: "Doe", age: 21};

// for(let i in person){
//   console.log(person[i]);
// };


// const salam = {fname: "Md Abdul", lname: "Salam", age: 21};

// for(let i in salam){
//   console.log(salam[i]);
// };

// const kona = {fname: "Kona", lname: "Abdul Salam", age:21};
// for(let i in kona){
//   console.log(kona[i])
// }

// const name = {salam: "MD ABDUL SALAM",salamage: 21, kona: "MST KONA", konaage: 17 };

// for(let i in name){
//   console.log(name[i]);
// };

// const person = {
//   name: "Abdul Salam",
//   age: 21,
//   cgpa: 4.22
// }
// for(let i in person){
//   console.log(person[i])
// }


// for of Loop 
// let a =[4,5,6,7,8,9,];
// for(let x of a){
//   console.log(x);
// };


// While Loops 
// let i = 0;
// let text = "";

// while(i < 10){
//   text += "The number is " + i ;
//   i++;
// };
// console.log(text);

// const cars = ["MBW", "VOLVO", "SAAB", "FORD"];
// let i = 0;
// let text = "";
// while(cars[i]){
//   text += cars[i];
//   i++;
// }
// console.log(text);

// let i = 0;
// let text = "";
// while(i < 20){
//   text += i;
//   i++;
// };

// console.log(text);

// for(let i = 0; i < 20; i++){
//   console.log(i);
// };

// const name = {
//   fname: "MD",
//   lname: "ABDUL SALAM",
//   age: 21,
//   cgpa: 4.22
// }

// for(let index in name){
//   console.log(name[index]);
// };

// const person = {fname:"John", lname:"Doe", age:25}; 
// for(let x in person){
//   console.log(person[x]);
// };

// const numbers = [45, 4, 9, 16, 25];
// let text = "";
// for(let x in numbers){
//   console.log(numbers[x]);
// };

// const cars = ["BMW", "Volvo", "Mini"];
// let text = "";
// for(let x of cars){
//   text += x;
// };
// console.log(text);

let language = "JavaScript";
let text = "";
for(let x of language){
  text += x;
};
console.log(text);
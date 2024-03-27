// Arrays in Js
// Collections of Items
// let student = [1,2,3,4,5,6,7,8,9,10];
// console.log(student);
// console.log(student.length);

// let love = ["Kona",'Hasina', "Saidul", "Sazina", "Shamim", "Huyaira", "Abu Said"];

// console.log(typeof love)
// let marks = [12, 23,34,45,67,78];
// // console.log(marks[2]="Salam")
// for (let i = 0; i < marks.length; i++){
//   console.log(marks[i])
// }
// let marks = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
// for(let i = 0; i < marks.length; i++){
//   console.log(marks[i]);
// };


// Arrays 
// let name = ['Salam', 'Kona', "Saidul", 'Hasina', "Samim", "Sazina", "Humayra", "Abu Said"];
// for(let index = 0; index < name.length; index++){
//   console.log(name[index]);
// };

// for( let hero of name){
//   console.log(hero);
// };

// for (let i of name ){
//   console.log(i);
// }

// for (let i of name){
//   console.log(i);
// };

// let numbers = [1,2,3,4,5,6,7,8,9];
// for(let index of numbers){
//   console.log(index)
// }

// let language ="JavaScript";
// for(let i of language){
//   console.log(i);
// };


// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for(let val of marks){
//   sum += val;
// };
// console.log(sum);

// Let's  Practice 
// Qs. For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
// Find the Average marks of the entire class 

// let marks = [85, 97, 44, 37, 76, 60];

// let sum = 0;

// for(let val of marks){
//   sum += val;
// }
// let avg = sum / marks.length;
// console.log(`avg marks of the class = ${avg}`);


// Let's Practice 
// Qs. For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
// All items have an offer of 10% off them. Chem. Change the Array to store final price after applying offer 


// let items = [250, 645, 300, 900, 50];
// let i = 0;
// for(let val of items){
//   let offer = val / 10;
//   items[i] = items[i] - offer;
//   console.log(`value after offer = ${items[i]}`);
//   i++;
// }

// for(let i = 0; i < items.length; i++){
//   let offer = items[i] / 10;
//   items[i] -= offer;
// }
// console.log(items)

// Arrays in js 
// Array Methods
// let foodItems = ["potato", "Apple", "Litchi", "Tomato"];
// foodItems.push("Chips", "Burger", "Panner");

// console.log(foodItems);

// let foodItems = ["Potato", "Apple", "Litchi", "Tomato"];

// console.log(foodItems);
// let deletedItems = foodItems.pop();
// console.log(foodItems);

// console.log(`deleted ${deletedItems}`);

// let foodItems = ["Potato", "Apple", "Litchi", "Tomato"];

// console.log(foodItems);

// console.log(foodItems.toString());

// Concat();; Joins Multiple Arrays & returns result
// let marvelHeroes = ["thor", "spiderman", "Ironman"];
// let deHeroes = ["Superman", "barman"];

// let heroes = marvelHeroes.concat(deHeroes);

// console.log(heroes);


// Unshift Add to start 
// let marvelHeroes = ["Thor", "Spiderman", "Ironman"];

// marvelHeroes.unshift("Antman");

// console.log(marvelHeroes)


// Shift 
// let marvelheroes = ["Thor", "Spiderman", "Ironman"];
// console.log(marvelheroes);

// let val = marvelheroes.shift();
// console.log(`deleted ${val}`);

let marvelHeroes = ["thor", "spiderman", "ironman", "antman", "Dr. Strange"];

console.log(marvelHeroes);
console.log(marvelHeroes.slice(1, 3));

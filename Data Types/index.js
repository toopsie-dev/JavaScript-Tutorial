// Declaring Data Types -> var, let and const
//String
let text = "Hello World";

// Number
let score = 27;

// Boolean (true or false)
let isQualify = true;

// Object
let person = {
  name: "Pyke",
  age: 21,
};

console.log(person.name + " " + person.age);
console.log(`${person["name"]} ${person.age}`);

// Array
let fruits = ["Apple", "Mango", "Pineapple"];
console.log(fruits[2]);

//function
let add = function (a, b) {
  return a + b;
};
console.log(add(40, 35));

// Push
let salad = ["Macaroni", "Nestle Cream", "Condensed Milk", "Cheese"];
salad.push("Kaong");
console.log(salad);

// Pop
salad.pop();
console.log(salad);

// Splice
const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
console.log(months);
months.splice(4, 1, "May");
console.log(months);

// Includes
const letters = ["A", "B", "C", "D"];
console.log(letters.includes("F"));

// Slice
console.log(salad.slice(1, 3));
console.log(salad.slice(-2));

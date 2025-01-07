// Object

let person = {
  name: "Pyke",
  age: 27,
};
let contactDetails = {
  ...person,
  contactNumber: "0912347558",
  email: "pyke@gmail.com",
};
console.log(contactDetails);

// Function

let numbers = [20, 30, 40];
function total(a, b, c) {
  return a + b + c;
}
console.log(total(...numbers));

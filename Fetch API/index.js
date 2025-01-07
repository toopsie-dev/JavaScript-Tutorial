// JSON placeholder
const url = "https://jsonplaceholder.typicode.com/todos/1";

// Stored url data
const fetchPromise = fetch(url);

// Get json data using promise
fetchPromise
  .then((response) => response.json())
  .then((response) => console.log(response));

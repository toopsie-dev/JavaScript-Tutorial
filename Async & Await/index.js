const url = "https://jsonplaceholder.typicode.com/todos/1";

const fetchPromise = async () => {
  const res = await fetch(url);
  const response = await res.json();
  console.log(response);
};

fetchPromise();

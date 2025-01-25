axios({
  url: "https://jsonplaceholder.typicode.com/todos/1",
  method: "GET",
})
  .then((fromResolve) => console.log(fromResolve.data))
  .catch((fromReject) => console.error(fromReject));

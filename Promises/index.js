let promise = new Promise((resolve, reject) => {
  const i = "Promise";
  i === "Promisesss" ? resolve() : reject();
});

promise
  .then(() => console.log("Promise was resolved!"))
  .catch(() => console.log("Promise was rejected!"));

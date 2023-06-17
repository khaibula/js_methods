async function promiseAll(functions) {
  return new Promise((resolve, reject) => {
    const result = new Array(functions.length);
    let count = functions.length;

    for (let index = 0; index < functions.length; index++) {
      const func = functions[index];
      func()
        .then((value) => {
          result[index] = value;
          count--;

          if (count === 0) return resolve(result);
        })
        .catch(reject);
    }
  })
};

promiseAll([
  () => new Promise((resolve, reject) => {
    setTimeout(() => resolve(300), 300);
  }),
  () => new Promise((resolve, reject) => {
    setTimeout(() => resolve(300), 300);
  })
])
  .then((values) => console.log(values))

function memoize(fn) {
  const cachedArgsArray = new Map();

  return function(...args) {
    const searchedArgs = JSON.stringify(args)

    if (cachedArgsArray.has(searchedArgs)) {
      return cachedArgsArray.get(searchedArgs);
    }

    const result = fn(...args);
    cachedArgsArray.set(searchedArgs, result);
    return result;
  }
}

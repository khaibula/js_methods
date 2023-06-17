function throttle(fn, t) {
  let savedArgs = null;
  let timeout;

  const timeoutFunction = () => {
    if (savedArgs) {
      fn(...savedArgs);
      savedArgs = null;
      timeout = setTimeout(timeoutFunction, t)
    } else {
      savedArgs = null;
      timeout = null;

    }
  }

  return (...args) => {
    if (timeout) {
      savedArgs = args
    } else {
      fn(...args)
      timeout = setTimeout(timeoutFunction, t)
    }
  }
};

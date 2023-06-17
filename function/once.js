/**
 * @param {Function} fn
 * @return {Function}
 */
const  once = function(fn) {
  let isCall = false;

  return function(...args){
    if(!isCall) {
      isCall = !isCall;
      return fn(...args);
    }
  }
};


const flat = function (arr, n, flatDeepLength = 0) {
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    if (Array.isArray(num) &&  n >= (flatDeepLength + 1)) {
      res.push(...flat(num, n, flatDeepLength + 1));
    } else {
      res.push(num);
    }
  }

  return res;
};

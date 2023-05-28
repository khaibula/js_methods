const dictionary = {
  a: 'A',
  b: 'B',
  c: 'C',
  A: 'A',
  B: 'B',
  C: 'C',
  // ...
}

const toUpperCase = (str) => {
  let newStr = '';

  for (let i = 0; i <= str.length - 1; i++) {
    newStr += dictionary[str[i]];
  }

  return newStr;
}

console.log(toUpperCase('abc'))

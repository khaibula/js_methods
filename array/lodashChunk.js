/**
 @param {Array<T>} array
 @param {Number} size
 @return {Array<Array<T>>}
 */

const lodashChunk = (array, size) => {
  let newArray = [];
  let chunk = [];

  for (let i = 0; i < array.length; i++) {
    chunk.push(array[i])

    if (chunk.length === size) {
      newArray.push(chunk)
      chunk = [];
    }

    if (i === array.length - 1 && chunk.length) {
      newArray.push(chunk)
    }
  }


  return newArray;
}

console.log(lodashChunk(['a', 'b', 'c', 'd'], 2));

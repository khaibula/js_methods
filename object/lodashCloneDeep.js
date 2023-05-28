/**
 * @param {Object} obj
 * @return {Object}
 */

const lodashCloneDeep = (obj) => {
  const newObj = {}

  for (const objKey in obj) {
    const objValue = obj[objKey];


    if (Array.isArray(objValue)) {
      newObj[objKey] = objValue;
    } else if (typeof objValue === "object") {
      newObj[objKey] = lodashCloneDeep(objValue)
    } else {
      newObj[objKey] = objValue;
    }
  }

  return newObj;
}

const arr = [3, 5, 7, 9];

const example = {
  name: 'name',
  date: {
    year: 2001,
    type: {
      format: "ISO",
    }
  },
  array: arr
}

const example2 = lodashCloneDeep(example)

console.log(example2.array === arr)

lodashCloneDeep()

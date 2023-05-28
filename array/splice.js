/**
 * @param {Array} array
 * @param {Number} start
 * @param {Number} deleteCount
 * @return {Array}
 */

const splice = (array, start, deleteCount, ...added) => {
  const newArray = [];
  let deletedCount = 0;

  for (let i = 0; i <= array.length - 1; i++) {
    const elem = array[i];
    const isCurrentElemIsDelete = i - deletedCount === start && deletedCount !== deleteCount;

    if (isCurrentElemIsDelete) {
      deletedCount++;
    }

    if ((i - deletedCount === start && deletedCount === deleteCount) && added.length) {
      newArray.push(...added);
    }

    if (!isCurrentElemIsDelete) {
      newArray.push(elem)
    }
  }

  return newArray;
}

let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
console.log(splice(arr, 0, 3, "Давай", "танцевать"));

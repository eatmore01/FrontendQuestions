const a = [1, 2, 3, 4, 5, 6];

const b = [10, 11, 12, 13];

const some = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return true;
    }
  }

  return false;
};

const g = some(a, (elem) => elem > 10);
const gb = some(b, (elem) => elem > 10);

console.log(g);
console.log(gb);

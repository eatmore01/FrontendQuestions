// args array example
// function sum(...args) {
//   return args;
// }

// const ar = sum(1, 2, 3, 4);

// console.log(ar); //[1,2,3,4]

// this task example
// const a = {
//   dev: "kupi",
//   update: (name) => {
//     this.dev = name;
//   },
// };

// a.update("ssssssssssssss");

// console.log(a.dev);

// memo function
function memo(func, resolver) {
  const cache = {};

  return (...args) => {
    // метод json.stringify преобразует в строку, а parse в объект
    const key = JSON.stringify(args);
    console.log(typeof key);

    if (cache[key]) {
      return cache[key];
    }

    const res = func(...args);

    cache[key] = res;

    return res;
  };
}

function sum(a, b) {
  return a + b;
}

const memoid = memo(sum);

const a = memoid(1, 2);

console.log(a);

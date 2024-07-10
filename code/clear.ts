export const createUser = (id: number, name: string, age: number) => {
  return {
    id: id,
    name: name,
    age: age,
  };
};

// function* add(y: number) {
//   let a = 0;
//   yield (a += y);
// } плохой пример как я исправил грязную на чистую, потому что эта функиц ятоже грязная ведь возвращает разное значание

let x = 0;
export const add1 = (x: number, y: number) => {
  return x + y;
};

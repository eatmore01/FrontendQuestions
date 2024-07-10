"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buyedCars = exports.randomCar = exports.cars = void 0;
exports.cars = ["tayota", "mersedes", "lamborgini", "chevrole", "yaguar"];
var randomCar = function (arr) {
    var randomindex = Math.floor(Math.random() * arr.length);
    return arr[randomindex];
};
exports.randomCar = randomCar;
var buyCar = function (arr) {
    var butcar = (0, exports.randomCar)(exports.cars);
    var newCars = exports.cars.filter(function (car) { return car !== butcar; });
    exports.cars = newCars;
    //console.log(newCars)
    arr.push(butcar);
};
exports.buyedCars = [];
buyCar(exports.buyedCars);
console.log(exports.cars);
console.log(exports.buyedCars);

export let cars = ["tayota", "mersedes", "lamborgini", "chevrole", "yaguar"]

export const randomCar = (arr: string[]): string => {
    const randomindex = Math.floor(Math.random() * arr.length)
    return arr[randomindex]
}
const buyCar = (arr: string[]) => {
    const butcar = randomCar(cars)

    const newCars = cars.filter(car => car !== butcar)

    cars = newCars

    //console.log(newCars)
    arr.push(butcar)
}

export const buyedCars = []

buyCar(buyedCars)

console.log(cars)
console.log(buyedCars)

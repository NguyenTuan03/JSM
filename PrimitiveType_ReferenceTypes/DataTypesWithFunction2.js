function createCar(obj) {
    obj = JSON.parse(JSON.stringify(obj))
    obj.name = 'BMW'
    return obj
}
const car = {
    name: 'Merc'
}
const newCar  = createCar(car)
console.log(newCar);
console.log(car);

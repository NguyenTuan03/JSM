// 1. IIFE
// 2. Closure
// 3. Hoisting
// 4. Strict mode
// 5. This keyword
// 6. Bind method
// 7. Call method
// 8. Apply method
// 9. Catching, throwing errors
// 10. Promise
// 11. Async function, await

//Function Expresstion
// const callNow = function(){
//     console.log('NOW')
// }
// callNow()

// IIFE
(function (){
    console.log('NOW')
})
// IIFE truyen tham so
(function (message){
    console.log('Message: ', message)
})('Chào bạn')

// Vidu về IIFE
const app = (function() {
  const cars = []
  return {
    get (index){
        return cars[index]
    },
    add(car) {
      cars.push(car)
    },
    edit(index, car) {
      cars[index] = car
    },
    delete(index) {
      cars.splice(index, 1)
    },
  }
})()


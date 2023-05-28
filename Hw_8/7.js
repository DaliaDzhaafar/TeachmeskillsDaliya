// Используя метод **`every`** проверьте то, в массиве сумма цифр квадратов значений четная.

// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`. 
// Реализуйте оба варианта, когда результирущее значение true или false

numbers3 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]
console.log(numbers3.every((element) => {return ((Math.pow(element,2)) + Math.pow(element,2)) % 2 == 0}))

console.log(numbers3.every((element) => {return ((Math.pow(element,2)) + Math.pow(element,2)) % 2 !== 0}))

const checknumbers= numbers3.every(function check(element) {
    if (((Math.pow(element,2)) + Math.pow(element,2)) % 2 == 0) {
        return element
    }
})
console.log(checknumbers)

const checknumbers1= numbers3.every(function check(element) {
    if (((Math.pow(element,2)) + Math.pow(element,2)) % 2 !== 0) {
        return element
    }
})
console.log(checknumbers1)
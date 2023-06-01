// Используя метод **`some`** проверьте то, в массиве есть элемент кратный 3 и 5.

// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`. 
// Реализуйте оба варианта, когда результирущее значение true или false

const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]
const Snumbers = numbers.some((value) => {
    if (value % 3 == 0 && value % 5 == 0) {
        return value
    }
})
console.log(Snumbers)

const numbers1 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]
const Snumbers1 = numbers1.some((value) => {
    if (value % 3 == 0 || value % 5 == 0) {
        return value
    }
})
console.log(Snumbers1)

const Snumbers2 = numbers.some(function filternumbers(value) {
    if (value % 3 == 0 && value % 5 == 0) {
        return value
    }
});
console.log(Snumbers2)

const Snumbers3 = numbers.some(function filternumbers(value) {
    if (value % 3 == 0 || value % 5 == 0) {
        return value
    }
});
console.log(Snumbers3)
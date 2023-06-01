// Используя метод **`find`** найдите в массиве первое четное число.

// ```javascript
//     const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]

const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]
const newarr = numbers.find((value) => {
    if (value % 2 == 0) {
        return value
    }
})
console.log(newarr)
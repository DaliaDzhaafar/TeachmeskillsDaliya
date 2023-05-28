// Дан массив:

// ```javascript
//     const numbers = [5, 43, 63, 23, 90]
// ```

// Удалите все элементы в массиве и выведите в консоль полученный результат.

// > Реализуйте решение двумя способами.

const numbers = [5, 43, 63, 23, 90]
for (let i = -4; i < numbers.length; i++) {
    console.log(numbers.pop())
}
console.log(numbers)

const numbers1 = [5, 43, 63, 23, 90]
for (const number of numbers1) {
    numbers1.shift(number), numbers1.pop(number), numbers1.pop(number.length / 2)
}
console.log(numbers1)
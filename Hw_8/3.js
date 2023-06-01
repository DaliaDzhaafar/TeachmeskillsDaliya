// С помощью метода **`filter`** создайте новый массив в котором не будет отрицательных чисел.

// ```javascript
//     const numbers = [7, -4, 32, -90, 54, 32, -21]
// ```

// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.

const numbers = [7, -4, 32, -90, 54, 32, -21]
const newunumbers = numbers.filter(function filternumbers(value) {
    if (value > 0) {
        return value
    }
});
console.log(newunumbers)

const newnumbers2 = numbers.filter((value) => {
    if (value > 0) {
        return value
    }
})
console.log(newnumbers2)
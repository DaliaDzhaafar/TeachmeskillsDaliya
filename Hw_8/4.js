// Используя метод **`reduce`** получите сумму всех чисел массива.

// ```javascript
//     const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
// ```

// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
const sum = fibonacci.reduce((prevalue, curvalue) => prevalue + curvalue)
console.log(sum)


function sumcount() {
    const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
    const sum3 = fibonacci.reduce((prevalue1, curvalue1) => prevalue1 + curvalue1)
    return console.log(sum3)
};
sumcount()
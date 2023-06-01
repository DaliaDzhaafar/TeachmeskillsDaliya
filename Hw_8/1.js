//Выведи все элементы массива в консоль с помощью метода **`forEach`**

// ```javascript
//     const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
// ```

// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`

function showall1() {
    const fibonacci1 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
    fibonacci1.forEach((value, index, fibonacci1) => {
        console.log(value)
    })
}
showall1();


const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
fibonacci.forEach((value, index, fibonacci) => {
    console.log(value)
});


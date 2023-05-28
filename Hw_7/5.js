
// ```javascript
//     const cats = ['Gachito', 'Tom', 'Batman']
// ```

// Выведите в консоль все элементы массива. Сначала через цикл **`for`**, затем **`for of`**.

const cats = ['Gachito', 'Tom', 'Batman']
for (let i = 0; i < cats.length; i++) {
    console.log(cats[i])
}

for (const number of cats) {
    console.log(number)
}
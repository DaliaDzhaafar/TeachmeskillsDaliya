
// Дан массив:

// ```javascript
//     const students = ['Polina', 'Dasha', 'Masha']
// ```

// + Удалите последний элемент массива, затем вместо него добавьте в массив студента `Borya`.
// + Удалите первый элемент массива, затем вместо него добавьте в массив студента `Andrey`.
// + Полученный результат не забудьте вывести в консоль.

const students = ['Polina', 'Dasha', 'Masha']

console.log(students.pop())
console.log(students.push(`Borya`))
console.log(students)


console.log(students.shift())
console.log(students.unshift(`Andrey`))
console.log(students)


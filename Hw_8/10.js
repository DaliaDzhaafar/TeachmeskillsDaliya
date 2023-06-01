// Дан массив. Запишите второй элемент этого массива в переменную elem2,
//  третий - в переменную elem3. Если в массиве нет третьего элемента - 
//  запишите в переменную elem3 значение 'eee', а если нет второго - в 
//  переменную elem2 запишите значение 'bbb'. Первый элемент никуда записывать не надо.

// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']
for (let i = 0; i < users.length; i++) {
    if (users[2] != null) {
        elem3 = users[2]
    }
    else
        elem3 = "eee"
    if
        (users[1] != null) {
        elem2 = users[1]
    }
    else
        elem2 = "bbb"
}
console.log(elem2);
console.log(elem3);
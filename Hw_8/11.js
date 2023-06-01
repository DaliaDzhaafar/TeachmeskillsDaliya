// Дан объект {name: 'Петр', 'surname': 'Петров', 'age': '20 лет', }. 
// Запишите соответствующие значения в переменные name, surname и age.
// Сделайте так, чтобы, если какое-то значение не задано - оно принимало следующее значение 
// по умолчанию: {name: 'Аноном', 'surname': 'Анонимович', 'age': '? лет'}


Object1 = { name: 'Петр', surname: 'Петров', age: null }
let Name1
let surname
let age

if (Object1.name != null) {
    Name1 = Object1.name
}
else
    Name1 = 'Аноном'
if (Object1.surname != null) {
    surname = Object1.surname
}
else
    surname = 'Анонимович'
if (Object1.age != null) {
    age = Object1.age
}
else
    age = '? лет'

console.log(Name1)
console.log(surname)
console.log(age)
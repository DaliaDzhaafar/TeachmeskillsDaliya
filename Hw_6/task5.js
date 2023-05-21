//Вычислите среднюю зарплату сотрудников и результат поместите в соответствующую переменную
let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    andrey: 664,
    alexandra: 199
}
// andry - повторная запись перезаписывает изначальное значение 
let A = Object.values(salaries);
let sum = 0;
A.map((item) => sum += item)
console.log(sum/A.length)
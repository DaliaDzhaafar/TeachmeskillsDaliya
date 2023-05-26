//Написать функцию **getSumNumbers**, 
//которая будет принимать число и вычислять сумму цифр из которых состоит число.

//> Для 2021 это будет 5.


function getSumNumbers(y :number): number {
    let sum = 0, x = String(y);
    for (let i = 0; i < x.length; i++) {
    sum += Number(x[i]);
    }
    return(sum)
}
console.log( getSumNumbers(125));
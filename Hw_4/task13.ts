//Реализовать метод получения рандомного числа с 
//плавающей точкой в заданном диапазоне. Диапазон задается аргументами фунции

const min1: number = Math.ceil(1.09420);
const max1: number = Math.floor(33.8877373);
const res1: number = Math.random() * (max1 - min1) + min1;
console.log(res1);
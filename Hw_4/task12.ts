//Реализовать метод получения рандомного целочисленного 
//числа в заданном диапазоне. Диапазон задается аргументами фунции

const min: number = Math.ceil(1.09420);
const max: number = Math.floor(33.8877373);
const res: number = Math.floor(Math.random() * (max - min) + min);
console.log(res);
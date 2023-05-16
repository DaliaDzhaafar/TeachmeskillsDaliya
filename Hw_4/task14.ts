//Выведите дату сегоднешнего дня в формате: "текущая дата: месяц/год/день. 
//Текущее время часы:минуты:секунды.". Использовать только внутренние методы Date.

const date1: Date = new Date();

let date3 = ("Tекущая дата: " + (date1.getMonth() +1) + '/'+  date1.getFullYear() + '/' + date1.getDate())
console.log(date3)

const date2: Date = new Date();
console.log("Текущее время часы: " + date2.toLocaleTimeString());

//Написать программу, которая выполняет следующие операции:

//- Получает возраст пользователя, если он больше 18, то выводит сообщение - `Попей пивка`. 
//- Если меньше, то выводит сообщение - `Пей колу`. 
//- Добавить условие, что если возраст от 16-18, выводим сообщение - `Можешь выкурить сигаретку, только маме не говори`.
let Age = 6;
if ( Age >= 16 && Age < 18) {
    console.log(`Можешь выкурить сигаретку, только маме не говори`)
}
else if (Age >= 18 ) {
    console.log(`Попей пивка`)
}
else if (Age < 18) {
    console.log(`Пей колу`)
}



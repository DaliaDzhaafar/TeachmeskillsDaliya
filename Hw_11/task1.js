// У нас есть список постов на сервере ('https://jsonplaceholder.typicode.com/posts'). 
// И наша задача отрисовать текст этих постов на странице(вывести на консоль).

// Но по каким то необъяснимым причинам, нам требуются посты номер 3, 7, 15, 23. 
//Выглядит просто. Но есть нюанс 🐒 
// Посты должны загружаться в определенном порядке. 
//Сначала 15, потом 23, потом 7 и только потом 3. 
//А если какой-то из постов не загрузиться, нам тогда необходимо  
//вывести в консоль ошибку.

// Наша задача должна иметь универсальное решение. 
//В любой момент может потребоваться загрузить другие посты, или больше постов или меньше.


const promise1 = new Promise((resolve, reject) => {
  resolve("Resolved");
})
  .catch(() => {console.log(new Error("Error"))})
  .then(() => console.log(15))
  .catch(() => {console.log(new Error("Error"))})
  .then(() => console.log(23))
  .catch(() => {console.log(new Error("Error"))})
  .then(() => console.log(7))
  .catch(() => {console.log(new Error("Error"))})
  .then(() => console.log(3))
  .catch(() => {console.log(new Error("Error"))})



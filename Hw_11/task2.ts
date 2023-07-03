// + Перейдите по ссылке `https://jsonplaceholder.typicode.com/`
// + Во вкладке `Resources` лежит ключ `/todos` - Это именно те данные которые нам нужны
// + Далее напишите две функции `getTodos` & `printTodos`
//     + Функция `getTodos` делает запрос по указанному адресу и забирает данные. 
//     + Функция `printTodos` создает список массив объектов,
// объект записывает id и title объекта с делом
//     + Вывести полученный результат в консоль
let url4 = `https://jsonplaceholder.typicode.com/todos`
async function getTodos(v:number) {
  const response = await fetch(url4);
  const response1 = await response.json();
  console.log(response1[v].id)
  return response1
}

async function printTodos() {
  let arr1 = new Array();
  await getTodos(7).then((res2) => {(arr1.push({res2:res2[7].id})),
  (arr1.push({res2:res2[7].title}))
})
  return arr1
}

console.log(printTodos().then((arr1) => console.log(arr1)))
  
  
  
  
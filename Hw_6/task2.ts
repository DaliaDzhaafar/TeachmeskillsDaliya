
//Создать любой обьект с двумя ключами и любыми значениями в них,
//а затем проверить есть ли в обьекте определенный ключ и если есть вывести в консоль **true**

const nameObj1: { name?: string, age?:number } = { name: 'Daliya', age:33 }
if ("name" in nameObj1) {
    console.log ('true')
}
else if (!("name" in nameObj1)) {
console.log ('false')}



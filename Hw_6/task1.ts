//Создать любой обьект с двумя ключами и любыми значениями в них, а затем удалить ключи из обьекта. 

const nameObj: { name?: string, age?:number } = { name: 'Daliya', age:33 }

console.log("Before Deleting the property", nameObj);

delete nameObj['name'];
delete nameObj['age'];
console.log("After Deleting the property", nameObj); 
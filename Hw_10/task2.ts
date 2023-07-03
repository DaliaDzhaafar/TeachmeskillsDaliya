// #### Task 2 💻

// Создайте два объекта людей. Реализуйте метод, который выводит строку `My name is <name>`. 
// И в зависимости от контекста выполнения, этот метод должен выводить соответвующее имя

class Person {
  firstName: string;
  lastName: string;
 constructor(firstName: string, lastName:string){
  this.firstName = firstName;
  this.lastName = lastName;
  }
}
const empl4 = new Person("Sergei","Ivanov");
const empl5 = new Person("Gennagi","Ivanov");
function print(extra: string) : void {
    console.log (`My name is  ${this.firstName}, ${extra}`)
}
print.call(empl4,"Hello");
print.call(empl5,"Hi")


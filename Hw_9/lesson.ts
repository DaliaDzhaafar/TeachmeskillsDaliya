
// function Employee(firstname, lastname, age) {
//     this.firstname = firstname
//     this.lastname = lastname
//     this.age = age;

//     this.sayHello =  function () {
//         return `Hello  ${this.firstname}, ${this.lastname}!`;
        
//     }

//     this.age1 = function () {
//         return ( 2023 - this.age > 18) 
//     }
// }

// const empl1 = new Employee("Petr", "Petrov", 33);
// const empl2 = new Employee ("Ivan", "Ivanov", 25);


// console.log(empl1.age);
// console.log(empl1.sayHello());
// console.log(empl1.age1());

// const animalArray = ["dog", "cat"];
// console.log(animalArray.toString())

// Array.prototype.animalToString = function () {
//     return this.map(animal =>  `Hello  ${animal}, ${animal}!`).toString();
// };
// console.log(animalArray.animalToString())

// const arr = [2,3,4]
// Array.prototype.numbersToString9 = function () {
//         return this.map(value => value%2 === 0)
// }

// console.log(arr.numbersToString9())

class Employee {
    constructor(public firstname:string, public lastname:string, private age: number) {
    this.setAge = age
    }
    sayHello() {
        return  ` Hello ${this.firstname}, ${this.lastname}!`
    }

set setAge(age:number) {
    if (age <0 ){
        this.age =0;
    } else if (age >100) {
        this.age =100;
    } else {
        this.age = age;
    }
}
get getAge() {
    return this.age
}
}
const empl3 = new Employee("Ivan","Ivanov",100000)

console.log(empl3.getAge)
console.log(empl3.firstname)




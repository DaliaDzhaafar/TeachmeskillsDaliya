// Создайте класс Animal, в конструктор которого передается имя, и 
// с помощью метода данного класса можно вывести фразу 
// `This is a <animalType>. It's name is <name>`. Так же данный класс должен иметь 
// статическое поле animalType, значение которого должно подставляться в фразу, которую выводит метод выше.


class Animal {
    name
    static animalType = "Cat"

    constructor(name){
    this.name = name;
    }
static showAnimal() {
    return `This is a ${this.animalType}. It's name is ${this.name}`
}
}
const animal = new Animal("Kitty")
console.log(Animal.showAnimal())


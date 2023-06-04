// #### Task 1 💻

// Создайте класс Car. Создайте два дочерних класса SportCar и LuxuryCar. 
// Конструкт родительского класса принимает переменные марку авто и тип двигателя.
//  Дочерние классы должны иметь методы выводящие максиальную скорость и цену на 
//  соответсвующие типы авто. Выводящий текст должен быть таким: `This is <carName>. 
//  It has <engineType> engine and max speed equal to <maxSpeed>. Approximetly cost 
// of the car is <carCost>`. (В задании используйте не только public модификатор, где это возможно)

class Car {
    constructor(public carName:string, public enginetype:string,) {
         this.carName = carName;
         this.enginetype = enginetype;
    }
}
class SportCar extends Car {
    private CarCost : number;
    private maxSpeed : number;
    constructor(carName:string, enginetype: string, CarCost: number, maxSpeed: number){
        super(carName, enginetype);
        this.CarCost = CarCost;
        this.maxSpeed = maxSpeed;
    }

sayAboutCar() {
return `This is ${this.carName}. It has ${this.enginetype} engine and max speed equal to ${this.maxSpeed}. 
Approximetly cost of the car is ${this.CarCost}`
    }    
}
class LuxuryCar extends Car {
    private CarCost : number;
    private maxSpeed : number;
    constructor(carName:string, enginetype: string, CarCost: number, maxSpeed: number){
        super(carName, enginetype);
        this.CarCost = CarCost;
        this.maxSpeed = maxSpeed;
    }
sayAboutCar() {
return `This is ${this.carName}. It has ${this.enginetype} engine and max speed equal to ${this.maxSpeed}. 
Approximetly cost of the car is ${this.CarCost}`
    }
}
    

const car1 = new SportCar("Maxima", "V-type", 10000, 260)
console.log(car1.sayAboutCar())

const car2 = new LuxuryCar("Mazda", "Green-stream", 5000, 200)
console.log(car2.sayAboutCar())
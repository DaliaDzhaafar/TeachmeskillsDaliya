import Cars from "./task1"
class Audi extends Cars {
    private CarCost : number;
    private maxSpeed : number;
    constructor(carName:string, enginetype: string, CarCost: number, maxSpeed: number){
        super(carName, enginetype);
        this.CarCost = CarCost;
        this.maxSpeed = maxSpeed;
    }
sayAboutCar(b:string) {
    if (b == "i"){
        throw new Error(`This is ${b}. It has`)
    }
    else
    return `This is ${b}. It has ${this.enginetype} engine and max speed equal to ${this.maxSpeed}. 
    Approximetly cost of the car is ${this.CarCost}`
  
    } 
}
const car6 = new Audi("Maxima", "V-type", 10000, 260)
console.log(car6.sayAboutCar("i"))

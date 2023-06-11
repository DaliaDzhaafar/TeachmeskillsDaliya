import Cars from "./task1"
class Renault extends Cars{
    private CarCost : number;
    private maxSpeed : number;
    constructor(carName:string, enginetype: string, CarCost: number, maxSpeed: number){
        super(carName, enginetype);
        this.CarCost = CarCost;
        this.maxSpeed = maxSpeed;
    }

sayAboutCar(c:string) {
    if (c == "i"){
        throw new Error(`This is ${c}. It has`)
    }
    else
    return `This is ${this.carName}. It has ${this.enginetype} engine and max speed equal to ${this.maxSpeed}. 
    Approximetly cost of the car is ${this.CarCost}`
    } 

}
const car7 = new Renault("Renault", "V-type", 10000, 260)
console.log(car7.sayAboutCar("i"))
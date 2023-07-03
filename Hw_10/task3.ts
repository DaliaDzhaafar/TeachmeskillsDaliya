//#### Task 3 💻

// Создайте два объекта машин. 
// Реализуйте метод выводящий количество дверей машины, 
// и с какой стороны находится руль. В зависимости от контекста выполнения, этот метод должен выводить 
// соответвующую информацию о машинах. 
// К примеру `This car has 3 doors and this is left-hand drive car`

class Car1 {
    doors: number;
    drive: string;
   constructor(doors: number, drive:string){
    this.doors = doors;
    this.drive = drive;
    }
  }
  const Car2 = new Car1(4,"Left-hand");
  const Car3 = new Car1(2,"Right-hand");

  function inforcar(arg1:string, arg2:string) : void {
      console.log (`This car has ${this.doors} doors and this is ${this.drive} drive car` + arg1 + arg2)
  }
  inforcar.apply(Car2,["4","8"]);
  inforcar.apply(Car3,["2","8"]);
//#### Task 1 💻
// - Реализовать класс калькулятор, который принимает 
// имеет несколько методов (сложение, вычитание, 
// умножение, деление, и еще любой/любые на выбор) 
// и принимает 2 параметра: 2 цифры и операция
// - Написать 10 положительных и отрицательных 
// тестов (методов) по вызову данных функции, 
// которые в зависимости от переданных аргументов
//  и ожидаемого результата выводит либо: что "тест" прошел, либо что "тест" свалился

export default class Calculator {
protected number1: number;
    protected number2: number;
    public operation: string;
    
    constructor(number1:number, number2:number, operation:string){
        this.number1 = number1;
        this.number2 = number2
        this.operation = operation.toString()
    }
    calculate() {
        switch (this.operation) {
            case 'summ':
                return this.summ();
            case 'reduce':
                return this.reduce();
            case 'multiply':
                return this.multiply();
            case 'divide':
                return this.divide()
        }
    }
summ() {
return this.number1 + this.number2
    }
reduce() {
return this.number1 - this.number2
}
    
multiply() {
    return this.number1 * this.number2
    }
    
divide() {
        return this.number1 / this.number2
    }
}
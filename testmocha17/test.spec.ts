// - Реализовать класс калькулятор, который принимает имеет несколько методов (сложение, вычитание, умножение, деление, и еще любой/любые на выбор) и принимает 2 параметра: 2 цифры и операция
// - Написать по 10 положительных и отрицательных тестов для каждого варианта:
// 	- Mocha
// 	- Mocha + chai
// 	- Jest

import Calculator from "../Hw_16/task1"
import assert = require("assert")

describe("First test", function testnumber() {
    it ("Check sum with negative values", function(){
    let Calculator2 = new Calculator(2,-9,"summ")
    let res6 = Calculator2.calculate()
    assert.equal(res6, -7), "Test failed"
}) 
    
    it ("Check with floater number", function () {
        let Calculator2 = new Calculator(2,3.1,"reduce")
        let res7 = Calculator2.calculate()
    assert.equal(res7, -1.1), "Test failed"  
        })
    it ("Check with null", function () {
            let Calculator2 = new Calculator(6,null,"divide")
            let res7 = Calculator2.calculate()
    assert.equal(res7,Infinity), "Test failed"
    })
    it("Check with big values", function () {
        let Calculator2 = new Calculator(3,800000,"multiply")
        let res7 = Calculator2.calculate()
    assert.equal(res7,2400000), "Test failed"  
    })
})


import Calculator from "../Hw_16/task1"
import {expect} from "chai"

import chai = require("chai")

describe("First test", function testnumber() {
    it ("Check sum with negative values", function(){
    let Calculator2 = new Calculator(2,-9,"summ")
    let res6 = Calculator2.calculate()
    chai.expect(res6).be.equal(-7)
}) 
    
    it ("Check with floater number", function () {
        let Calculator2 = new Calculator(2,3.1,"reduce")
        let res7 = Calculator2.calculate()
    chai.expect(res7).be.equal(-1.1) 
        })
    it ("Check with null", function () {
            let Calculator2 = new Calculator(6,null,"divide")
            let res7 = Calculator2.calculate()
    chai.expect(res7).be.equal(Infinity)
    })
    it("Check with big values", function () {
        let Calculator2 = new Calculator(3,800000,"multiply")
        let res7 = Calculator2.calculate()
    chai.expect(res7).be.equal(2400000)
    })
})


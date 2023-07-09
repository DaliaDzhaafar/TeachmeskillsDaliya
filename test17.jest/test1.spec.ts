import Calculator from "../Hw_16/task1"

describe("First test", () => {
    test("Check sum", () => {
    let Calculator2 = new Calculator(2,3,"summ")
    let res6 = Calculator2.calculate()
    let exp6: number = 5
    expect(res6).toEqual(exp6)
    })  
})

describe("First test", () => {
    test("Check reduce with floater", () => {
    let Calculator2 = new Calculator(2,3.1,"reduce")
    let res7 = Calculator2.calculate()
    let exp6: number = -1.1
    expect(res7).toEqual(exp6)
    })  
})

describe("First test", () => {
    test("Check with null", () => {
    let Calculator2 = new Calculator(6,null,"divide")
    let res7 = Calculator2.calculate()
    let exp6: number = Infinity
    expect(res7).toEqual(exp6)
    })  
})

describe("First test", () => {
    test("Check big values", () => {
    let Calculator2 = new Calculator(3,800000,"multiply")
    let res7 = Calculator2.calculate()
    let exp6: number = 2400000
    expect(res7).toEqual(exp6)
    })  
})
import Calculator from "./task1";

//Test2
function testnumber() {
let Calculator2 = new Calculator(2,2,"summ")
let res6 = Calculator2.calculate()
if (res6 === 4) {
console.log("Test passed")
}
else 
    console.log("Test failed")
}
testnumber()
//Test2
function testnumber2() {
    let Calculator2 = new Calculator(2,3,"reduce")
    let res7 = Calculator2.calculate()
    if (res7 === -1) {
    console.log("Test passed")
    }
    else 
        console.log("Test failed")
    }
testnumber2()
//Test3
function testnumber3() {
    let Calculator2 = new Calculator(2,3,"multiply")
    let res7 = Calculator2.calculate()
    if (res7 === 6) {
    console.log("Test passed")
    }
    else 
        console.log("Test failed")
    }
testnumber3()
//Test4
function testnumber4() {
    let Calculator2 = new Calculator(3,3,"divide")
    let res7 = Calculator2.calculate()
    if (res7 === 1) {
    console.log("Test passed")
    }
    else 
        console.log("Test failed")
    }
testnumber4()
//Test5
function testnumber5() {
let Calculator2 = new Calculator(3,3,"divide")
let res7 = Calculator2.calculate()
if (res7 === 1) {
console.log("Test passed")
}
else 
    console.log("Test failed")
}
testnumber5()
//Test6
function testnumber6() {
    let Calculator2 = new Calculator(3,0,"divide")
    let res7 = Calculator2.calculate()
    if (res7 === undefined) {
    console.log("Test passed")
    }
    else 
        console.log("Test failed")
    }
testnumber6()
//Test7
function testnumber7() {
    let Calculator2 = new Calculator(3,0,"multiply")
    let res7 = Calculator2.calculate()
    if (res7 === 3) {
    console.log("Test failed")
    }
    else 
        console.log("Test passed")
    }
testnumber7()
//Test8
function testnumber8() {
    let Calculator2 = new Calculator(3,0,"multiply")
    let res7 = Calculator2.calculate()
    if (typeof(res7) === "string") {
    console.log("Test failed")
    }
    else 
        console.log("Test passed")
    }
testnumber8()
//Test9
function testnumber9() {
    let Calculator2 = new Calculator(3,0,"multiply")
    let res7 = Calculator2.calculate()
    if (Calculator2.operation === "Square root") {
    console.log("Test failed")
    }
    else 
        console.log("Test passed")
    }
testnumber9()
//Test10
function testnumber10() {
    let Calculator2 = new Calculator(3,8989,"multiply")
    let res7 = Calculator2.calculate()
    if (res7 === null) {
    console.log("Test10 failed")
    }
    else 
        console.log("Test10 passed")
    }
testnumber10()
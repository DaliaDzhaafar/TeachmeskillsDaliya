//Напишите функцию **fooboo** которая принимает в качестве аргумента три параметра:

//+ булевое значение
//+ функцию **foo** которая выводит в консоль свое имя
//+ функцию **boo** которая выводит в консоль свое имя

function foo(name:string) {
console.log("foo" + name)
}
function boo(name:string) {
let b = console.log("boo" + name)
}
function fooboo(v: boolean, foo: Function, boo: Function) {
    let name:string ="Tom";
    console.log(boo(name),foo(name))
}
fooboo(true,foo,boo);
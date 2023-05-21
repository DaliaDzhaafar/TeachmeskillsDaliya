//Написать функцию **trimString** которая в качестве аргумента принимает три параметра:
//+ строку
//+ значение от
//+ значение по

//После вызова функция должна вернуть переданную строку обрезанную по значениям от и по

function trimString (x: string, y:number, z:number): string {
let b = (x.slice(y,z));
return b;
}
console.log(trimString('Hello Mam', 4,9));
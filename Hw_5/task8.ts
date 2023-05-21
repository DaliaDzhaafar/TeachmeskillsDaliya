

//Реализуйте функцию, который принимает 3 целочисленных значения a, b, c. Функция должна возвращать **true**, если треугольник 
//можно построить со сторонами заданной длины, и **false** в любом другом случае.

function Triangle(a:number,b:number,c:number): boolean {
    if ((a+b>c) && (b+c>a) && (a+c>b)){
    return true
    }
    else {
    return false
    }
}
console.log(Triangle(6,8,9));

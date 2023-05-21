//Напишите самовызыввающиеся функцию подсчет факторила
// числа: число должно передаваться как параметр функции
 
    function factorial(n:number){
    let res = 1;
    while(n) res *= n--;
    return res;
    }
    
  console.log(factorial(8))
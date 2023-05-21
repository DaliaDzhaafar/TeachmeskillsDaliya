//Напишите функцию которая в качестве аргумента принимает в 
//себя сумму кредита который хочет получить клиент и верните результат переплаты по кредиту:
//+ процентная ставка в год — 17%,
//+ количество лет — 5.

//> Мы пишем функцию для хорошего банка, поэтому сумма кредита не увеличивается.
function getCredit (x: number): number {
   let Monthlyinterest = 17/100/12
   let payments = 5*12
   let y = Math.pow(1+Monthlyinterest, 60);
   let MonthlyPayment = x*y * Monthlyinterest/(y-1);
   let totalPayment = MonthlyPayment*60;
   let totalInterest = totalPayment - x;
   return totalInterest
    }
    console.log(getCredit(10000))
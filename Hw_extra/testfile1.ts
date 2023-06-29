import List from "./list";
import Processing from "./list";

const list= new List();
list.processing().then(() =>{
    console.log(list);
});

// list.processing().then(() =>{
//     console.log(list.getproductbyTitle('DANVOUY Womens T Shirt Casual Cotton Short'));
// })

// list.processing().then(() =>{
//     console.log(list.getproductbyrate(10,60));
// })
// list.processing().then(() =>{
// console.log(list.getproductbydescr())
// })
list.processing().then(() =>{
    console.log(list.getproductsbyformat())
})
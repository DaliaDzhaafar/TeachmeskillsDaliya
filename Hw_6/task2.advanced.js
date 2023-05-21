let student1 = {
    name: 'Polina',
    age: 27,
}

let student2 = {
    name: 'Polina',
    age: 27,
}

function deepEqual (student1, student2){
    return JSON.stringify(student1)===JSON.stringify(student2);
 }
console.log(deepEqual(student1,student2))
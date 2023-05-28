// Используя метод **`map`** создайте новый массив, 
//на основе массива **`users`**, в котором каждый элемент массива будет содержать строку вида:

// > ['member 1: Darya', 'member 2: Masha', ... etc]

// ```javascript
//     const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']
// ```

// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']

const newusers1 = users.map(function addforevery(value, index) {
  index = index + 1
  return value = "member" + " " + index + ":" + " " + value
});

console.log(newusers1)


console.log(users)
const newusers = users.map((value, index) => {
  index = index + 1
  return value = "member" + " " + index + ":" + " " + value
}
)
console.log(newusers)



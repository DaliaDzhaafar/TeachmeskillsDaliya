
// ```javascript
//     const binary = [0, 0, 0, 0]
// ```

// + Наш бинарный массив неполный, в нем явно не хватает единиц.
// + Превратите данный массив в строку.

// > [0, 0, 0, 0] -> '0101010'

const binary = [0, 0, 0, 0]
for (let i = 0; i < binary.length; i++) {
    binary[i] = "01"
}
console.log(binary)

console.log(binary.join(''))

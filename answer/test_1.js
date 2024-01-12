const prompt = require('prompt-sync')({ sigint: true });


let input = prompt("")
let array = input.split(" ");
let arrayInt = array.map((conv) => parseInt(conv))

let arrayResult = [];

for (let i = 0; i < arrayInt.length; i++) {
    let temp = 0;
    for (let j = 0; j < array.length; j++) {
        if (i != j) {
            temp += arrayInt[j];
        }
    }
    arrayResult[i] = temp;
}
let result = arrayResult.sort()
min = result[0];
max = result[result.length - 1]

console.log(`${min} ${max}`);
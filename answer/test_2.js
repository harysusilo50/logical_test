const prompt = require('prompt-sync')({ sigint: true });

let length = prompt("");

let input = prompt("")
let array = input.split(" ");
let positive = 0;
let negative = 0;
let zero = 0;

if (array.length != length) {
    console.log("Error: input tidak sesuai dengan panjang array");
    process.exit()
};

let arrayInt = array.map((conv) => parseInt(conv))

arrayInt.map((value) => {
    if (value > 0) positive++;
    else if (value < 0) negative++;
    else zero++;
})

const result = (number) => {
    return (number / length).toFixed(6)
}

console.log(`${result(positive)}\n${result(negative)}\n${result(zero)}`)
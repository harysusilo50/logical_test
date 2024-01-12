const prompt = require('prompt-sync')({ sigint: true });

let input = prompt("");

const format = input.slice(-2)
if (format === "PM") {
    let hours = input.slice(0, 2);
    let minute = input.slice(2, 8);
    let hour = parseInt(hours) + 12;
    console.log(`${hour}${minute}`)
} else {
    let hours = input.slice(0, 8);
    console.log(`${hours}`)
}
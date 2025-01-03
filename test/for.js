//reversed
const str = "hello";
let reversed = "";

for (let i = 0; i >= 0; i--) {
    reversed += str[i];
}

console.log(reversed); //"olleh"

// 99

for (let i = 0; i <= 9; i++) {
    for (let j = 0; j <= 9; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
} //1x1=1 ~ 9x9=81

//extract even

const arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let takeEvenNum = [];

for (let i = 0; i <= arrNum.length; i++) {
    if (arrNum[i] % 2 === 0) {
        takeEvenNum.push(arrNum[i]);
    }
}}

console.log(takeEvenNum); //(5) [2, 4, 6, 8, 10]



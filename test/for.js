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
}

console.log(takeEvenNum); //(5) [2, 4, 6, 8, 10]

//1+2...+10 =
let total = 0;
let presentNum = "";

for (let i = 0; i <= 10; i++) {
    total += i;
    //因爲初始值是0 所以判斷如果是0 那就只顯示 0 而不要＋符號
    //排除0之後 剩下的值 都要加上＋符號 
    presentNum += i === 0 ? `${i}` : ` + ${i}`;
    // if(presentNum += i === 0){
    //     return `${i}`
    // }else{
    //     return +`${i}`
    // }
}

console.log(`${presentNum} = ${total}`);
//0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55

function isPrime(num) {
    num < 2 ? false : true;
    for (let i = 2; i < num; i++) {
        return num % i === 0 ? false : true;
    }
}

console.log(isPrime(22)); //false
console.log(isPrime(23)); //true

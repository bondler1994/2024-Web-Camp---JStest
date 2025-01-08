//使用代理來測量效能
function isPrime(num) {
    num < 2 ? false : true;
    for (let i = 2; i < num; i++) {
        return num % i === 0 ? false : true;
    }
}
isPrime = new Proxy(isPrime, {
    apply: (target, thisArg, args) => {
        console.time("isPrime");
        const result = target.apply(thisArg, args);
        console.log(thisArg);

        console.timeEnd("isPrime");
        return result;
    },
    // apply: function(target, thisArg, args) {
    //     console.time("isPrime");
    //     const result = target.apply(thisArg, args);
    //     console.log(thisArg);

    //     console.timeEnd("isPrime");
    //     return result;
    // },
});
// const a = {method: isPrime}
// a.method(1299827);
isPrime(1299827);

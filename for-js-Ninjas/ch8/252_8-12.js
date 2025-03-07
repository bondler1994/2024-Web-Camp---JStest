function createNegativeArrayProxy(array) {
    if (!Array.isArray(array)) {
        throw new TypeError("Expected an array");
    }
    return new Proxy(array, {
        get: (target, index) => {
            index = +index;
            return target[index < 0 ? target.length + index : index];
        },
        set: (target, index, val) => {
            index = +index;
            return (target[index < 0 ? target.length + index : index] = val);
        },
    });
}

const ninjas = ["yoshi", "kuma", "hattori"];
const proxiedNinjas = createNegativeArrayProxy(ninjas);

console.log(ninjas[0]);
console.log(ninjas[1]);
console.log(ninjas[2]);

console.log(proxiedNinjas[0]);
console.log(proxiedNinjas[1]);
console.log(proxiedNinjas[2]);

console.log(typeof ninjas[-1]);
console.log(typeof ninjas[-2]);
console.log(typeof ninjas[-3]);

console.log(proxiedNinjas[-1]);
console.log(proxiedNinjas[-2]);
console.log(proxiedNinjas[-3]);

proxiedNinjas[-1] = "hachi";
ninjas[2] = "hachi"

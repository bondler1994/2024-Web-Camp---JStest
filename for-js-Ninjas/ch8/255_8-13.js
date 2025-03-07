function measure(item) {
    const starTime = new Date().getTime();
    for (let i = 0; i < 500000; i++) {
        item[0] === "yoshi";
        item[1] === "kuma";
        item[2] === "hattori";
    }
    return new Date().getTime() - starTime;
}

const ninjas = ["yoshi", "kuma", "hattori"];
const proxiedNinjas = createNegativeArrayProxy(ninjas);

console.log("Proxies are around", Math.round(measure(proxiedNinjas) / measure(ninjas)));

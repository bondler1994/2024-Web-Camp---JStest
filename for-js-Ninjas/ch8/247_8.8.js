// 未使用代理來建立日誌
function Ninja() {
    let _skillLevel = 0;

    Object.defineProperty(this, "skillLevel", {
        get: () => {
            console.log("called get");
            return _skillLevel;
        },
        set: (value) => {
            console.log("called set");
            _skillLevel = value;
        },
    });
}

const ninja = new Ninja();
ninja.skillLevel;
ninja.skillLevel = 4;



//使用代理來建立日誌
function makeLoggable(target) {
    return new Proxy(target, {
        get: (target, property) => {
            console.log(`hey, I'm calling u "${target[property]}"`);
            return target[property];
        },
        set: (target, property, value) => {
            console.log(`ohh, We add "${value}" in the object`);
            target[property] = value;
        },
    });
}

let ninja = { name: "Yoshi" };
ninja = makeLoggable(ninja);

ninja.name;
ninja.weapon = "sword";

//用set來驗證屬性

function Ninja() {
    let _skillLevel = 0;

    Object.defineProperty(this, "skillLevel", {
        get: () => {
            return _skillLevel;
        },
        set: (value) => {
            if (!Number.isInteger(value)) {
                throw new TypeError("wrong");
            }
            _skillLevel = value;
        },
    });
}

const ninja = new Ninja();

try {
    ninja.skillLevel = "hello";
} catch (error) {
    throw new Error("wrong");
}

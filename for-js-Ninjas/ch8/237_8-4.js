//測試get set 建立私有變數
function Ninja() {
    let _skillLevel = 0;

    Object.defineProperty(this, "skillLevel", {
        get: () => {
            return _skillLevel;
        },
        set: (value) => {
            _skillLevel = value;
        },
    });
}

const ninja = new Ninja();

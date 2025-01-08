function Folder() {
    return new Proxy(
        {},
        {
            get: (target, property) => {
                console.log(`reading ${property}`);
                if (!(property in target)) {
                    target[property] = new Folder();
                }
                return target[property];
            },
        }
    );
}

const rootFolder = new Folder();
try {
    rootFolder.ninjasDir.firstNinjaDir.ninjaFile = "yoshi.txt";
    pass("an exception wasn't raised");
} catch (e) {
    throw new Error("An exception has occurred");
}

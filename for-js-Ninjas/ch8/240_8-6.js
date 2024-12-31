//shogun將軍
const shogun = {
    name: "Watson",
    //家族
    clan: "Li",

    get fullName() {
        return this.name + " " + this.clan;
    },
    set fullName(name) {
        const segments = name.split(" ");
        this.name = segments[0];
        this.clan = segments[1];
    },
};

shogun.name;
shogun.clan;
shogun.fullName;
shogun.fullName = "Jeremy Kuo";

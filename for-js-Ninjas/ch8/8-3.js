class NinjaCollection {
    constructor() {
        this.ninjas = ["Fang", "Jamie", "Tangerine"];
    }
    get firstNinja() {
        return this.ninjas[0];
    }
    set firstNinja(name) {
        this.ninjas[0] = name;
    }
}

const ninjaCollection = new NinjaCollection();
ninjaCollection.firstNinja; //Fang
ninjaCollection.firstNinja = "Danny";//Danny

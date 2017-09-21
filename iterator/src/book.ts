export class Book {
    private name_: String;

    constructor(name: String) {
        this.name_ = name;
    }

    get name() {
        return this.name_;
    }
}

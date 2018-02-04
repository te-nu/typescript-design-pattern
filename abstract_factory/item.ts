export abstract class Item {
    protected caption: string;

    constructor(caption: string) {
        this.caption = caption;
    }
    abstract makeHTML(): string;
}
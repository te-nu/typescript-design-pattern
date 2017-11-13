export abstract class AbstractDisplay {
    abstract open(): void;
    abstract print(): void;
    abstract close(): void;

    public display() {
        this.open();
        for(var _i = 0; _i < 5; _i++) {
            this.print();
        }
        this.close();
    }
}

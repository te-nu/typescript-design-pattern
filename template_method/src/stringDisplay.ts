import { AbstractDisplay } from './abstractDisplay';
export class StringDisplay extends AbstractDisplay {
    private st: string;

    constructor(string: string) {
        super();
        this.st = string;
    }

    public open() {
        console.log("---open---")
    }
    public close() {

    }
    public print() {
        console.log(this.st);
    }
}
import { AbstractDisplay } from './abstractDisplay';

export class StringDisplay extends AbstractDisplay {
    private st: string;

    constructor(string: string) {
        super();
        this.st = string;
    }

    public open(): void {
        this.printLine();
    }
    public close(): void {
        this.printLine();
    }
    public print(): void {
        console.log("|" + this.st + "|");
    }
    private printLine(): void {
        console.log("+" + Array(this.st.length + 1).join("-") + "+");
    }
}

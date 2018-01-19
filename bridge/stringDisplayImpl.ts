import { start } from 'repl';
import { DisplayImpl } from './displayImpl';

export class StringDisplayImpl extends DisplayImpl{
    private string_: string;
    private width_: number;

    constructor(string: string) {
        super();
        this.string_ = string;
        this.width_ = string.length;
    }

    rawOpen() {
        this.printLine();
    }

    rawPrint() {
        console.log("|" + this.string_ + "|");
    }

    rawClose() {
        this.printLine();
    }

    private printLine() {
        console.log("+" + Array(this.width_+1).join("-") + "+")
    }
}
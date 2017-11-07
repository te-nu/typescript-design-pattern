import { AbstractDisplay } from './abstractDisplay';

export class CharDisplay extends AbstractDisplay {
    private ch: string; // typescriptにchar型はないのでstringで代用

    constructor(ch: string) {
        super();
        this.ch = ch;
    }

    public open() {
        console.log("---open---")
    }

    public close() {
    }

    public print() {
        console.log(this.ch)
    }
}

import { AbstractDisplay } from './abstractDisplay';

export class CharDisplay extends AbstractDisplay {
    private ch: string; // typescriptにchar型はないのでstringで代用(1文字でない場合はエラーを起こす)

    constructor(ch: string) {
        super();
        if(ch.length != 1) {
            throw("CharDisplay: length is invalid.");
        }
        this.ch = ch;
    }

    public open(): void {
        process.stdout.write("<<");
    }

    public close(): void {
        console.log(">>");
    }

    public print(): void {
        process.stdout.write(this.ch);
    }
}

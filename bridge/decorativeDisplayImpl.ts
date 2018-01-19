import { start } from 'repl';
import { DisplayImpl } from './displayImpl';

export class DecorativeDisplayImpl extends DisplayImpl {
    private head_: string;
    private body_: string;
    private foot_: string;

    constructor(head: string, body: string, foot: string) {
        super();
        this.head_ = head;
        this.body_ = body;
        this.foot_ = foot;
    }

    rawOpen() {
        process.stdout.write(this.head_);
    }

    rawPrint() {
        process.stdout.write(this.body_);
    }

    rawClose() {
        console.log(this.foot_)
    }
}
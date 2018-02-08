import { Border } from './border';
import { Display } from './display';

export class SideBorder extends Border {
    private borderChar: string;

    constructor(display: Display, ch: string) {
        super(display);
        this.borderChar = ch;
    }

    get columns() {
        return 1 + this.display.columns + 1;
    }

    get rows() {
        return this.display.rows;
    }

    getRowText(row: number) {
        return this.borderChar + this.display.getRowText(row) + this.borderChar;
    }
}
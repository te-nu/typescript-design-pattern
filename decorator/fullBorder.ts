import { Border } from './border';
import { Display } from './display';

export class FullBorder extends Border {
    constructor(display: Display) {
        super(display);
    }

    get columns(): number {
        return 1 + this.display.columns + 1;
    }

    get rows(): number {
        return 1 + this.display.rows + 1;
    }

    getRowText(row: number): string {
        if(row == 0) {
            return "+" + this.makeLine('-', this.display.columns) + "+";
        } else if (row == this.display.rows+ 1) {
            return "+" + this.makeLine('-', this.display.columns) + "+";
        } else {
            return "|" + this.display.getRowText(row - 1) + "|";
        }
    }

    private makeLine(ch: string, count: number): string {
        return Array(count+1).join(ch);
    }
}
import { Display } from './display';

export class StringDisplay extends Display {
    private string_: string;

    constructor(string: string) {
        super();
        this.string_ = string;
    }

    get columns(): number {
        return this.string_.length;
    }

    get rows(): number {
        return 1;
    }

    getRowText(row: number) {
        if(row == 0) {
            return this.string_;
        } else {
            return null;
        }
    }
} 
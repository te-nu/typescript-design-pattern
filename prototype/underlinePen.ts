import { Product } from './product';
import * as clone from 'clone';

export class UnderlinePen implements Product {
    private ulchar_: string;

    constructor(ulchar: string) {
        this.ulchar_ = ulchar;
    }

    public use(s: string) {
        console.log("\"" + s + "\"");
        console.log(Array(s.length + 3).join(this.ulchar_));
    }

    public createClone(): Product {
        return <Product>clone(this);
    }
}
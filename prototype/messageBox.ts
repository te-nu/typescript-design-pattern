import { Product } from './product';
import * as clone from 'clone';

export class MessageBox implements Product {
    private decochar_: string;

    constructor(decochar: string){
        this.decochar_ = decochar;
    }

    public use(s: string) {
        var length = s.length;
        console.log(Array(length + 3).join(this.decochar_));
        console.log(this.decochar_ + s + this.decochar_);
        console.log(Array(length + 3).join(this.decochar_));
    }

    public createClone() {
        return <Product>clone(this);
    }
}
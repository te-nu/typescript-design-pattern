import { Product } from './product';

export class IdCard extends Product {
    public readonly owner: string;

    constructor(owner: string){
        super();
        console.log(owner + "さんのカードを作ります。");
        this.owner = owner;
    }

    public use(): void {
        console.log(this.owner + "さんのカードを使います。");
    }
}
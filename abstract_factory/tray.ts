import { Item } from './item';

export abstract class Tray extends Item {
    protected tray: Array<Item>;

    constructor(caption: string){
        super(caption);
    }

    add(item: Item) {
        this.tray.push(item);
    }
}
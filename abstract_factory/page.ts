import { Item } from './item';
import * as fs from 'fs';

export abstract class Page {
    protected title: string;
    protected author: string;
    protected content: Array<Item>;
    private stream: fs.WriteStream

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }

    add(item: Item) {
        this.content.push(item);
    }

    output() {
        var filename: string = this.title + ".html";
        this.stream = fs.createWriteStream(__dirname + "/" + this.title);
        this.stream.write(this.makeHTML());
    }

    abstract makeHTML(): string;
}
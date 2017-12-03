import { Builder } from './builder';
import * as fs from 'fs'

export class HTMLBuilder extends Builder {
    private filename: string;
    private stream: fs.WriteStream

    makeTitle(title: string): void {
        this.filename = title + ".html";

        this.stream = fs.createWriteStream(__dirname + "/" + this.filename);
        this.stream.write("<html><head><title>" + title + "</title></head><body>\n");

        this.stream.write("<h1>" + title + "</h1>\n");
    }

    makeString(str: string): void {
        this.stream.write("<p>" + str + "</p>\n");
    }

    makeItems(items: string[]): void {
        this.stream.write("<ul>\n");
        items.forEach(item => {
            this.stream.write("<li>" + item + "</li>\n");
        });
        this.stream.write("</ul>\n");
    }

    close(): void {
        this.stream.write("</body></html>\n");
    }

    get result(): string {
        return this.filename;
    }
}
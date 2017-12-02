import { Builder } from './builder';

export class TextBuilder extends Builder {
    private buffer: string = "";

    makeTitle(title: string) {
        this.buffer += "====================\n"
        this.buffer += "[" + title + "]" + "\n"
        this.buffer += "====================\n"
        this.buffer += "\n"
    }

    makeString(str: string) {
        this.buffer += "■" + str + "\n";
        this.buffer += "\n"
    }

    makeItems(items: string[]) {
        for (var i_ = 0; i_ < items.length; i_++){
            this.buffer += "・" + items[i_] + "\n";
        }
        this.buffer += "\n"
    }

    close() {
        this.buffer += "====================\n"
    }

    get result() {
        return this.buffer;
    }
}
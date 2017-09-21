import { Iterator } from './iterator'
import { BookShelf } from './bookShelf'

export class BookShelfIterator implements Iterator {
    private bookShelf: BookShelf;
    private index: number;

    constructor(bookShelf: BookShelf) {
        this.bookShelf = bookShelf;
        this.index = 0;
    }

    public hasNext(): boolean {
        if (this.index < this.bookShelf.length) {
            return true;
        } else {
            return false;
        }
    }

    public next(): Object {
        return this.bookShelf.getBookAt(this.index++);
    }
}

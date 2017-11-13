import { ReverseIterator } from './reverseIterator'
import { BookShelf } from './bookShelf'

export class BookShelfReverseIterator implements ReverseIterator {
    private bookShelf: BookShelf;
    private index: number;

    constructor(bookShelf: BookShelf) {
        this.bookShelf = bookShelf;
        this.index = bookShelf.length - 1;
    }

    public hasPrev(): boolean {
        if (this.index >= 0) {
            return true;
        } else {
            return false;
        }
    }

    public prev(): Object {
        return this.bookShelf.getBookAt(this.index--);
    }
}

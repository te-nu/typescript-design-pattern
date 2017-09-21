import { Aggregate } from './aggregate'
import { Book } from './book'
import { Iterator } from './iterator'
import { BookShelfIterator } from './bookShelfIterator'

export class BookShelf implements Aggregate {
    private books: Book[];
    private last: number = 0;

    public constructor(maxsize: number) {
        this.books = new Array(maxsize);
    }

    public getBookAt(index: number): Book {
        return this.books[index];
    }

    public appendBook(book: Book): void {
        this.books[this.last++] = book;
    }

    public get length(): number {
        return this.last;
    }

    public iterator(): Iterator {
        return new BookShelfIterator(this);
    }
}

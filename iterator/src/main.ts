import { Iterator } from './iterator';
import { BookShelf } from './bookShelf';
import { Book } from './book';

var bookShelf: BookShelf = new BookShelf(4);
bookShelf.appendBook(new Book("こころ"));
bookShelf.appendBook(new Book("人間失格"));
bookShelf.appendBook(new Book("君の名は"));
bookShelf.appendBook(new Book("ハリーポッターと人間失格"));

var it: Iterator = bookShelf.iterator();

while(it.hasNext()) {
    console.log(<Book>it.next());
}

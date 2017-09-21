"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bookShelf_1 = require("./bookShelf");
var book_1 = require("./book");
var bookShelf = new bookShelf_1.BookShelf(4);
bookShelf.appendBook(new book_1.Book("こころ"));
bookShelf.appendBook(new book_1.Book("人間失格"));
bookShelf.appendBook(new book_1.Book("君の名は"));
bookShelf.appendBook(new book_1.Book("ハリーポッターと人間失格"));
var it = bookShelf.iterator();
while (it.hasNext()) {
    console.log(it.next());
}

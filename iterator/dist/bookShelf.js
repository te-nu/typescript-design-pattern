"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bookShelfIterator_1 = require("./bookShelfIterator");
var BookShelf = (function () {
    function BookShelf(maxsize) {
        this.last = 0;
        this.books = new Array(maxsize);
    }
    BookShelf.prototype.getBookAt = function (index) {
        return this.books[index];
    };
    BookShelf.prototype.appendBook = function (book) {
        this.books[this.last++] = book;
    };
    Object.defineProperty(BookShelf.prototype, "length", {
        get: function () {
            return this.last;
        },
        enumerable: true,
        configurable: true
    });
    BookShelf.prototype.iterator = function () {
        return new bookShelfIterator_1.BookShelfIterator(this);
    };
    return BookShelf;
}());
exports.BookShelf = BookShelf;

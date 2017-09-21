"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BookShelfIterator = (function () {
    function BookShelfIterator(bookShelf) {
        this.bookShelf = bookShelf;
        this.index = 0;
    }
    BookShelfIterator.prototype.hasNext = function () {
        if (this.index < this.bookShelf.length) {
            return true;
        }
        else {
            return false;
        }
    };
    BookShelfIterator.prototype.next = function () {
        return this.bookShelf.getBookAt(this.index++);
    };
    return BookShelfIterator;
}());
exports.BookShelfIterator = BookShelfIterator;

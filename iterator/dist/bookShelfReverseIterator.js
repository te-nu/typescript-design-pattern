"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BookShelfReverseIterator = (function () {
    function BookShelfReverseIterator(bookShelf) {
        this.bookShelf = bookShelf;
        this.index = bookShelf.length - 1;
    }
    BookShelfReverseIterator.prototype.hasPrev = function () {
        if (this.index >= 0) {
            return true;
        }
        else {
            return false;
        }
    };
    BookShelfReverseIterator.prototype.prev = function () {
        return this.bookShelf.getBookAt(this.index--);
    };
    return BookShelfReverseIterator;
}());
exports.BookShelfReverseIterator = BookShelfReverseIterator;

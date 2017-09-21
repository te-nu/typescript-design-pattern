"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book = (function () {
    function Book(name) {
        this.name_ = name;
    }
    Object.defineProperty(Book.prototype, "name", {
        get: function () {
            return this.name_;
        },
        enumerable: true,
        configurable: true
    });
    return Book;
}());
exports.Book = Book;

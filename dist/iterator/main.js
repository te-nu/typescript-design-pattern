/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BookShelfIterator = /** @class */ (function () {
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


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BookShelfReverseIterator = /** @class */ (function () {
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


/***/ }),
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Book = /** @class */ (function () {
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


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var bookShelfIterator_1 = __webpack_require__(2);
var bookShelfReverseIterator_1 = __webpack_require__(3);
var BookShelf = /** @class */ (function () {
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
    BookShelf.prototype.reverseIterator = function () {
        return new bookShelfReverseIterator_1.BookShelfReverseIterator(this);
    };
    return BookShelf;
}());
exports.BookShelf = BookShelf;


/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var bookShelf_1 = __webpack_require__(7);
var book_1 = __webpack_require__(6);
var bookShelf = new bookShelf_1.BookShelf(4);
bookShelf.appendBook(new book_1.Book("こころ"));
bookShelf.appendBook(new book_1.Book("人間失格"));
bookShelf.appendBook(new book_1.Book("君の名は"));
bookShelf.appendBook(new book_1.Book("ハリーポッターと人間失格"));
console.log("数え上げ");
var it = bookShelf.iterator();
while (it.hasNext()) {
    console.log(it.next());
}
console.log("逆順で数え上げ");
var rit = bookShelf.reverseIterator();
while (rit.hasPrev()) {
    console.log(rit.prev());
}


/***/ })
/******/ ]);
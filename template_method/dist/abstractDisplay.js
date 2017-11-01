"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractDisplay = (function () {
    function AbstractDisplay() {
    }
    AbstractDisplay.prototype.display = function () {
        this.open();
        for (var _i = 0; _i < 5; _i++) {
            this.print();
        }
        this.close();
    };
    return AbstractDisplay;
}());
exports.AbstractDisplay = AbstractDisplay;

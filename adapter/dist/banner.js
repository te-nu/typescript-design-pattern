"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Banner = (function () {
    function Banner(string) {
        this.string_ = string;
    }
    Banner.prototype.showWithParen = function () {
        console.log("(" + this.string_ + ")");
    };
    Banner.prototype.showWithAster = function () {
        console.log("*" + this.string_ + "*");
    };
    return Banner;
}());
exports.Banner = Banner;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var banner_1 = require("./banner");
var PrintBanner = (function (_super) {
    tslib_1.__extends(PrintBanner, _super);
    function PrintBanner(string) {
        return _super.call(this, string) || this;
    }
    PrintBanner.prototype.printWeak = function () {
        this.showWithParen();
    };
    PrintBanner.prototype.printStrong = function () {
        this.showWithAster();
    };
    return PrintBanner;
}(banner_1.Banner));
exports.PrintBanner = PrintBanner;

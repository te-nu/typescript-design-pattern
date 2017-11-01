"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var abstractDisplay_1 = require("./abstractDisplay");
var StringDisplay = (function (_super) {
    tslib_1.__extends(StringDisplay, _super);
    function StringDisplay(string) {
        var _this = _super.call(this) || this;
        _this.st = string;
        return _this;
    }
    StringDisplay.prototype.open = function () {
        console.log("---open---");
    };
    StringDisplay.prototype.close = function () {
    };
    StringDisplay.prototype.print = function () {
        console.log(this.st);
    };
    return StringDisplay;
}(abstractDisplay_1.AbstractDisplay));
exports.StringDisplay = StringDisplay;

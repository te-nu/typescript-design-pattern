// singleton

console.log("singletonを使った場合");

import { Singleton } from "./singleton";

var obj1: Singleton = Singleton.instance;
var obj2: Singleton = Singleton.instance;

if (obj1 === obj2) {
    console.log("obj1とobj2は同じインスタンスです。");
} else {
    console.log("obj1とobj2は同じインスタンスではありません。");
}


// not_singleton

console.log("\nsingletonを使わなかった場合");

import { NotSingleton } from "./not_singleton";

var obj3: NotSingleton = new NotSingleton();
var obj4: NotSingleton = new NotSingleton();

if (obj3 === obj4) {
    console.log("obj3とobj4は同じインスタンスです。");
} else {
    console.log("obj3とobj4は同じインスタンスではありません。");
}

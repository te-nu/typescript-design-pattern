import { TextBuilder } from "./textBuilder";
import { HTMLBuilder } from './htmlBuilder';
import { Director } from './director';
import * as fs from 'fs'

switch (process.argv[2]) {
    case "plain":
        var textBuilder: TextBuilder = new TextBuilder();
        var director: Director = new Director(textBuilder);
        director.construct();
        var result: string = textBuilder.result;
        console.log(result)
        break;
    case "html":
        var htmlBuilder: HTMLBuilder = new HTMLBuilder();
        var director: Director = new Director(htmlBuilder);
        director.construct();
        console.log(htmlBuilder.result + "が作成されました");
        break;
    default:
        console.log("Usage: plain か html を引数に入れてください。");
}

import { Link } from './link';
import { Tray } from './tray';
import { Page } from './page';

export abstract class Factory {
    static getFactory(classname: string): Factory {
        let factory: Factory = null;

        factory = eval("new" + classname + "()");

        return factory;
    }

    abstract createLink(caption: string, url: string): Link;
    abstract createTray(caption: string): Tray;
    abstract createPage(title: string, author: string): Page;

}
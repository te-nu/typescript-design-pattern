import { DisplayImpl } from './displayImpl';

export class Display {
    private impl_: DisplayImpl;

    constructor(impl: DisplayImpl) {
        this.impl_ = impl;
    }

    open() {
        this.impl_.rawOpen();
    }

    print() {
        this.impl_.rawPrint();
    }

    close() {
        this.impl_.rawClose();
    }

    display() {
        this.open();
        this.print();
        this.close();
    }
}
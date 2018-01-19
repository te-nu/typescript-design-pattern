import { Display } from './display';
import { DisplayImpl } from './displayImpl';

export class CountDisplay extends Display {
    constructor(impl: DisplayImpl) {
        super(impl);
    }

    multiDisplay(times: number) {
        this.open();
        for(let i_ = 0; i_ < times; i_++) {
            this.print();
        }
        this.close();
    }
}
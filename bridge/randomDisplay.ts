import { Display } from './display';
import { DisplayImpl } from './displayImpl';

export class RandomDisplay extends Display {
    constructor(impl: DisplayImpl) {
        super(impl);
    }

    randomDisplay(max_times: number) {
        this.open();
        const times = Math.floor(Math.random() * (max_times + 1));
        for(let i_ = 0; i_ < times; i_++){
            this.print();
        }
        this.close();
    }
}
import { DisplayImpl } from './displayImpl';
import { CountDisplay } from './countDisplay';

export class IncleaseDisplay extends CountDisplay {
    private step_: number;

    constructor(impl: DisplayImpl, step: number) {
        super(impl);
        this.step_ = step;
    }

    increaseDisplay(level: number) {
        for(let i_ = 0; i_ <= level; i_ += this.step_) {
            this.multiDisplay(i_);
        }
    }
}
import { Display } from './display';

export abstract class Border extends Display{
    protected display: Display;

    protected constructor(display: Display) {
        super();
        this.display = display;
    }
}
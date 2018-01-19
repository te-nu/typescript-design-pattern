import { Display } from "./display";
import { StringDisplayImpl } from './stringDisplayImpl';
import { CountDisplay } from './countDisplay';
import { RandomDisplay } from './randomDisplay';
import { IncleaseDisplay } from './increaseDisplay';
import { DecorativeDisplayImpl } from './decorativeDisplayImpl';

let d1: Display = new Display(new StringDisplayImpl("Hello Japan."));
let d2: Display = new CountDisplay(new StringDisplayImpl("Hello World."));
let d3: CountDisplay = new CountDisplay(new StringDisplayImpl("Hello Universe."));
let d4: RandomDisplay = new RandomDisplay(new StringDisplayImpl("Hello Space."));
let d5: IncleaseDisplay = new IncleaseDisplay(new DecorativeDisplayImpl("<", "*", ">"), 2)

d1.display();
d2.display();
d3.display();
d4.display();

d3.multiDisplay(5);
d4.randomDisplay(5);
d5.increaseDisplay(10);

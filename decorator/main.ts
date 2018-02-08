import { Display } from "./display";
import { StringDisplay } from './stringDisplay';
import { SideBorder } from './sideBorder';
import { FullBorder } from './fullBorder';

let b1: Display = new StringDisplay("Hello World");
let b2: Display = new SideBorder(b1, "#");
let b3: Display = new FullBorder(b2);

b1.show();
b2.show();
b3.show();

let b4: Display = new SideBorder(
    new FullBorder(
        new FullBorder(
            new SideBorder(
                new FullBorder(
                    new StringDisplay("Hello!!!")
                ),
                '*'
            )
        )
    ), "/"
);

b4.show();
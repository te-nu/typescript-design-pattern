import { Strategy } from './strategy';
import { Hand } from './hand';

export class WinningStrategy implements Strategy {
    private won: boolean = false;
    private prevHand: Hand;

    nextHand() {
        if(!this.won) {
            this.prevHand = Hand.getHand(Math.floor( Math.random() * 3));
        }
        return this.prevHand;
    }

    study(win: boolean) {
        this.won = win;
    }
}
import { Strategy } from './strategy';
import { Hand } from './hand';

export class Player {
    private name: string;
    private strategy: Strategy;
    private winCount: number = 0;
    private loseCount: number = 0;
    private gameCount: number = 0;

    constructor(name: string, strategy: Strategy) {
        this.name = name;
        this.strategy = strategy;
    }

    nextHand(): Hand {
        return this.strategy.nextHand();
    }

    win() {
        this.strategy.study(true);
        this.winCount++;
        this.gameCount++;
    }

    lose() {
        this.strategy.study(false);
        this.loseCount++;
        this.gameCount++;
    }

    even() {
        this.gameCount++;
    }

    toString() {
        return "[" + this.name + ":" + this.gameCount + "games," + this.winCount + "win," + this.loseCount + "lose]";
    }
}
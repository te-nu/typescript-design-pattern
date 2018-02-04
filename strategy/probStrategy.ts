import { Strategy } from './strategy';
import { Hand } from './hand';
import { prependListener } from 'cluster';

export class ProbStrategy implements Strategy{
    private prevHandValue: number = 0;
    private currentHandValue: number = 0;

    private history: number[][] = [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
    ]

    nextHand(): Hand {
        let bet: number = Math.floor(Math.random() * this.getSum(this.currentHandValue));
        let handValue: number = 0;
        if(bet < this.history[this.currentHandValue][0]) {
            handValue = 0;
        } else if(bet < this.history[this.currentHandValue][0] + this.history[this.currentHandValue][1]) {
            handValue = 1;
        } else {
            handValue = 2;
        }
        this.prevHandValue = this.currentHandValue;
        this.currentHandValue = handValue;
        return Hand.getHand(handValue);
    }

    getSum(hv: number): number {
        let sum: number = 0;
        for(let i_: number = 0; i_ < 3; i_++){
            sum += this.history[hv][i_];
        }
        return sum;
    }

    study(win: boolean) {
        if(win) {
            this.history[this.prevHandValue][this.currentHandValue]++;
        } else {
            this.history[this.prevHandValue][(this.currentHandValue + 1) % 3]++;
            this.history[this.prevHandValue][(this.currentHandValue + 2) % 3]++;
        }
    }
}
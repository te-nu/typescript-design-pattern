import { Hand } from './hand';

export interface Strategy {
    nextHand(): Hand;
    study(isWin: boolean);
}
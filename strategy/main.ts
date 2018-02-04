import { Hand } from "./hand";
import { Player } from './player';
import { WinningStrategy } from './winningStrategy';
import { ProbStrategy } from './probStrategy';


const player1: Player = new Player("Taro", new WinningStrategy());
const player2: Player = new Player("Hana", new ProbStrategy());

for(let i_: number = 0; i_ < 10000; i_++) {
    let nextHand1: Hand = player1.nextHand();
    let nextHand2: Hand = player2.nextHand();

    if(nextHand1.isStrongerThan(nextHand2)) {
        console.log("winner:" + player1.toString());
        player1.win();
        player2.lose();
    } else if(nextHand2.isStrongerThan(nextHand1)) {
        console.log("winner:" + player2.toString());
        player1.lose();
        player2.win();
    } else {
        console.log("even.")
        player1.even();
        player2.even();
    }

    console.log("Total result:");
    console.log(player1.toString());
    console.log(player2.toString());
}
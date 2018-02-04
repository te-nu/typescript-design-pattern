export class Hand {
    static readonly HANDVALUE_GUU: number = 0;
    static readonly HANDVALUE_CHO: number = 1;
    static readonly HANDVALUE_PAA: number = 2;

    static readonly hand: Hand[] = [
        new Hand(Hand.HANDVALUE_GUU),
        new Hand(Hand.HANDVALUE_CHO),
        new Hand(Hand.HANDVALUE_PAA),
    ]

    private static handName: string[] = [
        'グー', 'チョキ', 'パー'
    ]

    private handValue: number;

    constructor(handValue: number) {
        this.handValue = handValue;
    }

    static getHand(handValue: number) {
        return this.hand[handValue];
    }

    isStrongerThan(h: Hand) {
        return this.fight(h) == 1;
    }

    isWeekerThan(h: Hand) {
        return this.fight(h) == -1;
    }

    private fight(h: Hand): number{
        if(this == h) {
            return 0;
        } else if ((this.handValue + 1) % 3 == h.handValue) {
            return 1;
        } else {
            return -1;
        }
    }

    toString() {
        return Hand.handName[this.handValue];
    }
}
export abstract class Display {
    abstract get columns(): number;
    abstract get rows(): number;
    abstract getRowText(row: number);

    show() {
        for(let i_ = 0; i_ < this.rows; i_++) {
            console.log(this.getRowText(i_));
        }
    }
}
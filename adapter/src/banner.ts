export class Banner {
    private string_: string;

    constructor(string: string) {
        this.string_ = string;
    }

    public showWithParen(): void {
        console.log("(" + this.string_ + ")");
    }

    public showWithAster(): void {
        console.log("*" + this.string_ + "*");
    }
}
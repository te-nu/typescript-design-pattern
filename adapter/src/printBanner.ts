import { Banner } from "./banner"
import { Print } from "./print"

export class PrintBanner extends Banner implements Print {
    constructor(string: string) {
        super(string);
    }

    public printWeak(){
        this.showWithParen();
    }

    public printStrong(): void {
        this.showWithAster();
    }
}

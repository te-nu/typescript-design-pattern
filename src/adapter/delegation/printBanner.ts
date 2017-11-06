import { Banner } from "./banner"
import { Print } from "./print"

export class PrintBanner extends Print {
    private banner: Banner;

    constructor(string: string) {
        super();
        this.banner = new Banner(string);
    }

    public printWeak(){
        this.banner.showWithParen();
    }

    public printStrong(): void {
        this.banner.showWithAster();
    }
}

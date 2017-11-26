export class Singleton {
    private static singleton: Singleton = new Singleton();
    private constructor() {
        console.log("インスタンスを作成しました。");
    }
    public static get instance(): Singleton {
        return this.singleton;
    }
}

import { Builder } from './builder';

export class Director {
    private builder: Builder;

    constructor(builder: Builder){
        this.builder = builder;
    }

    construct(): void {
        this.builder.makeTitle("Greeting");
        this.builder.makeString("朝から昼にかけて");
        this.builder.makeItems([
            "おはようございます",
            "こんにちは",
        ]);
        this.builder.makeString("夜に");
        this.builder.makeItems([
            "こんばんは",
            "おやすみなさい",
            "さようなら",
        ]);
        this.builder.close();
    }
}
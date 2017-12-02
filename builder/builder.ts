export abstract class Builder {
    abstract makeTitle(title: string): void;
    abstract makeString(str: string): void;
    abstract makeItems(items: string[]): void;
    abstract close(): void;
}
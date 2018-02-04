export interface Product {
    use(s: string): void;
    createClone(): Product;
}
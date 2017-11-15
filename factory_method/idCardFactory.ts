import { IdCard } from './idCard';
import { Factory } from './factory';
import { Product } from './product';

export class IdCardFactory extends Factory {
    public readonly owners: Array<string> = [];

    protected createProduct(owner: string): Product {
        return new IdCard(owner);
    }

    protected registerProduct(product: Product): void {
        this.owners.push((<IdCard>product).owner);
    }
}
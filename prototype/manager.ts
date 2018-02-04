import { Product } from './product';

export class Manager {
    private showcase_: {[name: string]: Product} = {};

    public register(name: string, proto: Product) {
        this.showcase_[name] = proto;
    }
    public create(protoname: string) {
        var proto: Product = <Product>this.showcase_[protoname];
        return proto.createClone();
    }
}
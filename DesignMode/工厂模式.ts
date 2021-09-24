// 定义一个用于创建对象的接口,让子类决定实例化哪一个类 工厂方法使一个类的实例化延迟到其子类
//产品工厂
abstract class Product {
    method1() {

    }
    abstract method2(): void;
}
abstract class ProductCreator {
    abstract  createProduct<T extends Product>():T;
}
class ConcreateProduct1 extends Product {

    method2(): void {
        throw new Error("Method not implemented.");
    }

}
class ConcreateProduct2 extends Product {

    method2(): void {
        throw new Error("Method not implemented.");
    }

}
class ConProductCreator extends ProductCreator{
    createProduct<T extends Product>(): T {
        throw new Error("Method not implemented.");
    }

}
let creator = new  ConProductCreator;
creator.createProduct()
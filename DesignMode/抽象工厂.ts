abstract class AbstractProductA {
    shareMethod() {

    }
    abstract doSomething();
}
class ProductA1 extends AbstractProductA {
    doSomething() {
        throw new Error("Method not implemented.");
    }
}
class ProductA2 extends AbstractProductA {
    doSomething() {
        throw new Error("Method not implemented.");
    }

}
//有N类产品 就有N个创建方法
abstract class AbstractCreator {
    //A类产品
    abstract createProductA();
    //B类产品
    abstract createProductB();
}
class Creator1 extends AbstractCreator{
    createProductA() {
        throw new Error("Method not implemented.");
    }
    createProductB() {
        throw new Error("Method not implemented.");
    }

}



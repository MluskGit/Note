abstract class AbstractClass {

    abstract doSomething();
    abstract doAnything();
    templateMethod() {
        this.doSomething();
        this.doAnything();
    }
}
class ConcreteClass1 extends AbstractClass {
    doSomething() {
        throw new Error("Method not implemented.");
    }
    doAnything() {
        throw new Error("Method not implemented.");
    }
}

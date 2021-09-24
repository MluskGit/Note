abstract class HummerModel {
    abstract start(): void;
    abstract stop(): void;
    abstract alarm(): void;
    abstract engineBoom(): void;
    public run(): void {
        this.start();
        this.stop();
        this.alarm();
        this.engineBoom();
    }

}

class HummerH1Model extends HummerModel {
    start(): void {

    }
    stop(): void {

    }
    alarm(): void {

    }
    engineBoom(): void {

    }
}
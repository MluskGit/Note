interface Human{

}
abstract class AbstractWhiteHuman implements Human{
    constructor(parameters) {
        
    }
    public getColor():void{
        console.log("白人");
    }
    public talk():void{
        console.log('白色人说话')
    }
}
abstract class AbstractBlackHuman implements Human{
    public getColor():void{
        console.log("黑人");
    }
    public talk():void{
        console.log('黑色人说话')
    }
}
abstract class AbstractYellowHuman implements Human{
    public getColor():void{
        console.log("黄色人");
    }
    public talk():void{
        console.log('黄色人说话')
    }
}

class FemaleYellowHuman extends AbstractYellowHuman{
    public getSex():void{
        console.log('女人')
    }
}
class MaleYellowHuman extends AbstractYellowHuman{
    public getSex():void{
        console.log('男人')
    }
}

interface HumanFactory{
    createYellowHuman():Human;
    createWhiteHuman():Human;
    createBlackHuman():Human;
}
class FemaleFactory implements HumanFactory{
    createYellowHuman():Human{
        return
    }
    createWhiteHuman():Human{
        return
    }
    createBlackHuman():Human{
        return
    }
}
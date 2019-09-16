### 单一职责
> 一个接口必须由同一种类型原因所改变,类实现各种单一的接口,面向接口编程,单一职责是编写一个类的标准,要严格执行.属性(业务对象接口),行为(业务行为接口)
### 里氏替换
> 只要父类能出现的地方子类就可以出现而且替换为子类也不会产生任何错误或异常,使用者可能根本不需要知道是父类还是子类,但是,反过来就不行了,有子类出现的地方,父类未必就能适应.

> 如果子类不能完整地实现父类的方法,或者父类的某些方法在子类中已经发生'畸变'.则建议断开父子继承关系,采用依赖,聚合,组合等关系代替继承

### 依赖倒置(OOD)
> 高层模块不应该依赖底层模块,两者都应该依赖其抽象  
> 抽象不应该依赖细节  
> 细节应该依赖抽象

> 每个类尽量都有接口或抽象类,或者抽象类和接口两者都具备  
> 变量的表面类型尽量是接口或者抽象类  
> 尽量不要覆写基类的方法  

### 接口隔离原则
> 接口职责尽量单一,一个接口只服务与一个子模块或业务逻辑  

### 迪米特法则定义
> 一个对象应该对其他对象有最少的了解  
> 出现在成员变量,方法的输入输出参数中成为成员朋友类  
> 如果一个方法放在本类中,既不增加类间关系,也不对本类不产生负面影响,就放置在本类中  
> 类间解耦,弱耦合
## 热更新 ##
>* 热更新是一种手游及App常用的更新方式
>* 热更新可以在不重新下载客户端的情况下，更新游戏的内容。
>* 这个过程中，不用下载很多不需要更新的资源，减少玩家的时间及流量消耗，给用户好的体验
>* C#是不能被打包进AssetBundle中的，所以无法通过AssetBundle对代码进行改动，但是Lua是即时编译型语言，并且可以被打包进入AssetBundle中，在需要修改简单功能时，将Lua代码通过AssetBundle进行更新即可。

## 现在主流的热更新方式主要有Lua和ILRuntime ##

## Tolua ##
>* Tolua是Unity静态绑定lua的一个解决方案，它通过C#中集成lua的插件，可以自动生成用于在lua中访问Unity的绑定代码，并把C#中的常量、变量、函数、属性、类以及枚举暴露给lua。其从cstolua衍变而来。

### wrap文件是如何生成，为什么要生成wrap？ ###
>* 每个wrap文件都是对一个c#类的包装，在lua中，通过对wrap类中的函数调用，间接的对c#实例进行操作  
>* lua中调用和创建的c#实例实际都是存在c#中的objects表中，lua中的变量只是一个持有该c#实例索引位置的fulluserdata，并没有直接对c#实例进行引用。对c#实例进行函数的调用和变量的修改都是通过元表调用操作wrap文件中的函数进行的。
>* [tolua之wrap文件的原理](https://www.cnblogs.com/blueberryzzz/p/9672342.html) 
###  lua是怎么获取、调用c#的静态方法、成员方法？c#对象在lua栈里是以什么形式存在的？ ###

## c#如何调用到lua的方法的？tolua是怎么把lua的table、function转成c#的table、function实例的？ ## 
>* c#对象在lua栈里是以数组下标存储的，需要调用的时候，可以通过这个索引，通过ObjectTranslator.GetObject(int udata)访问到C#层对象
>* warp文件
>* [【unity游戏开发】tolua学习-C#和Lua的交互细节](https://zhuanlan.zhihu.com/p/109198841)
##  tolua把对象存在objects里，而值类型的Struct如果存在objects了，会发生封箱、拆箱的操作，tolua是如何避免的？ ##
>* 值拷贝
## objects里的对象是什么时候会被移除？lua怎样才算正确释放了c#对象？ ## 
>* ①c#内存泄露c# object返回给lua，是通过dictionary将lua的userdata和c# object关联起来，只要lua中的userdata没回收，c# object也就会被这个dictionary拿着引用，导致无法回收。最常见的就是gameobject和component，如果lua里头引用了他们，即使你进行了Destroy，也会发现他们还残留在mono堆里。不过，因为这个dictionary是lua跟c#的唯一关联，所以要发现这个问题也并不难，遍历一下这个dictionary就很容易发现。ulua和tolua下这个dictionary在ObjectTranslator类、slua则在ObjectCache类。那么，lua是什么时候移除了对c#对象的引用的？tolua在Update里调用了luaState.Collect(); 然后调用了ObjectTranslator.Collect();用了脏标记模式，gcList长度大于0的时候进行回收，调用DestroyUnityObject()
>* [用Unity+Lua开发游戏，有什么好的办法进行性能检测？](https://www.zhihu.com/question/307064711/answer/570257565)  
## Lua GC ##
>* collectgarbage("collect"): 做一次完整的垃圾收集循环。通过参数 opt 它提供了一组不同的功能：
>* collectgarbage("count"): 以 K 字节数为单位返回 Lua 使用的总内存数。 这个值有小数部分，所以只需要乘上 1024 就能得到 Lua 使用的准确字节数（除非溢出）。
>* collectgarbage("restart"): 重启垃圾收集器的自动运行。
>* collectgarbage("setpause"): 将 arg 设为收集器的 间歇率。 返回 间歇率 的前一个值。
>* collectgarbage("setstepmul"): 返回 步进倍率 的前一个值。
>* collectgarbage("step"): 单步运行垃圾收集器。 步长"大小"由 arg 控制。 传入 0 时，收集器步进（不可分割的）一步。 传入非 0 值， 收集器收集相当于 Lua 分配这些多（K 字节）内存的工作。 如果收集器结束一个循环将返回 true 。
>* collectgarbage("stop"): 停止垃圾收集器的运行。 在调用重启前，收集器只会因显式的调用运行。
## 如何监测Lua的编程产生内存泄露 ##
>* 方法:①：1. 针对会产生泄露的函数,先调用collectgarbage("collect")和collectgarbage("count"),取得最初的内存使用情况。2. 函数调用后, collectgarbage("collect")进行收集, 并使用collectgarbage("count")再取得当前内存, 最后记录两次的使用差。3.可以保存函数调用前后的_G到本地文件，然后使用软件比较前后两次的_G的内容差，可以获取到泄漏的具体内容。
>* 方法:②：游戏开发：[Unity中Lua造成的堆内存泄露问题](https://blog.csdn.net/UWA4D/article/details/103729875?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-4.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-4.control)

## 利用tolua如何实现热更？ ##
>* md5对比 打包到 AssetBundle


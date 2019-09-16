# [**Canvas**](https://www.runoob.com/w3cnote/html5-canvas-intro.html)
# 只支持一种原生的图形绘制：矩形。所有其他图形都至少需要生成一种路径 (path)。不过，我们拥有众多路径生成的方法让复杂图形的绘制成为了可能。
##  canvast 提供了三种方法绘制矩形：
>   1.  fillRect(x, y, width, height)：绘制一个填充的矩形。
>   2. strokeRect(x, y, width, height)：绘制一个矩形的边框。
>   3. clearRect(x, y, widh, height)：清除指定的矩形区域，然后这块区域会变的完全透明。
## 绘制路径 (path)
> 图形的基本元素是路径。
> 路径是通过不同颜色和宽度的线段或曲线相连形成的不同形状的点的集合。
> 一个路径，甚至一个子路径，都是闭合的。
> 使用路径绘制图形需要一些额外的步骤：
>   1. 创建路径起始点
>   2. 调用绘制方法去绘制出路径
>   3. 把路径封闭
>   4. 一旦路径生成，通过描边或填充路径区域来渲染图形。
>> 下面是需要用到的方法：
>>  1. **beginPath()**
>>> 新建一条路径，路径一旦创建成功，图形绘制命令被指向到路径上生成路径
>>  2. **moveTo(x, y)**
>>> 把画笔移动到指定的坐标(x, y)。相当于设置路径的起始点坐标。
>>  3. **closePath()**
>>> 闭合路径之后，图形绘制命令又重新指向到上下文中
>>  4. **stroke()**
>>>通过线条来绘制图形轮廓
>>  5. **fill()**
>>> 通过填充路径的内容区域生成实心的图形

> ` function draw(){
>    var canvas = document.getElementById('tutorial');  
>    if (!canvas.getContext) return;
>    var ctx = canvas.getContext("2d");
>    ctx.beginPath(); //新建一条path
>    ctx.moveTo(50, 50); //把画笔移动到指定的坐标
>    ctx.lineTo(200, 50);  //绘制一条从当前位置到指定坐标(200, 50)的直线.
>    //闭合路径。会拉一条从当前点到path起始点的直线。如果当前点与起始点重合，则什么都不做
>    ctx.closePath();
>    ctx.stroke(); //绘制路径。
}
draw();`
## **分治策略**
> **分解** (divide)
将问题规划为一些子问题,子问题的形式与原问题一样,只是规模更小  
> **解决** (conquer)
递归地求解出子问题,如果子问题规模足够小,则直接求解  
> **合并** (combine)
将子问题的解组合成原问题的解


### **代入法**
猜测一个边界,用数学归纳法证明
### **递归树法**
将递归转换成一颗树,用边界和技术求解递归式
### **主方法**
T(n) = aT(n/b)+f(n)
生产a个子问题,每个子问题的是规模是原来的1/b,f(n)代表分解合并的时间



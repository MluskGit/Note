# 笔记

> [git使用book](https://git-scm.com/book/zh/v2)  


> 

**2018.3.21开始笔记生活，记录自己学习的点点滴滴.**

### [将本地的项目上传到码云](http://www.cnblogs.com/guaguaerhao/p/7865034.html)

    1、码云上创建一个项目 testgit (名字随你)

    2、本地创建一个文件夹D:/testgit，然后使用git bash    

    3、cd 到本地文件夹中D:/testgit，

    4、使用 git init 命令 ，初始化一个git 本地仓库（项目）,会在本地创建一个 .git 的文件夹

    5、使用git remote add origin https://gitee.com/你的码云用户名/testgit      //添加远程仓库

    6、使用 git pull origin master 命令，将码云上的仓库pull到本地文件夹

    7、将要上传的文件，添加到刚刚创建的文件夹

    8、使用git add . 或者 git add + 文件名 (将文件保存到缓存区)

    9、使用git commit -m '描述新添加的文件内容'  (就是注释)   （文件保存到本地仓库）

    10、使用git push origin master ，将本地仓库推送到远程仓库

### https://yq.aliyun.com/articles/277118?utm_content=m_42641

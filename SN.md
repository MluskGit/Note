# 早安少女 #
>* 引擎: unity2017.4.40f1  
>* 框架: tolua  fairyGUI

## 配置脚本路径 ##
>* LuaFramework\Editor\CmdUtil.cs 设置 py 2.7 exe 路径 生成协议脚本
>* LuaFramework\Editor\FairyGUIXmlReader.cs 设置 gui导出路径 导出UI
>* LuaFramework\Editor\ProtoBuilder.cs 设置 serverBase proto2lua 
>* Config\proto 包含 java_out main proto protoc.exe protoc_all_copy.bat

## 编译项目(过程比较久 可以睡一觉) ##
>* unity->LuaFramework->Build windows 所有资源
>* unity->LuaFramework->Build FairyGUI 依赖

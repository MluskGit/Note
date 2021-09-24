Unity中的dataPath,streamingAssetsPath,persistentDataPath,temporaryCachePath在不同平台下的路径
dataPath :返回程序的数据文件所在的文件夹的路径（只读）。返回路径为相对路径，一般是相对于程序安装目录的位置。不同游戏平台的数据文件保存路径不同。
StreamingAssetsPath： 此属性用于返回数据流的缓存目录，返回路径为相对路径，适合设置一些外部数据文件的路径。（只读）
PersistentDataPath：返回一个持久化数据存储目录的路径（只读），可以在此路径下存储一些持久化的数据文件。对应同一平台，在不同程序中调用此属性时，其返回值是相同的，但是在不同的运行平台下，其返回值会不一样。
temporaryCachePath：此属性用于返回一个临时数据的缓冲目录（只读）。对于同一平台，在不同程序中调用此属性时，其返回值是相同的，但是在不同的运行平台下，其返回值是不一样的。
persistentDataPath和temporaryCachePath的返回值一般是程序所在平台的固定位置，适合程序在运行过程中产生的数据文件。
IOS：
Application.dataPath :                      Application/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/xxx.app/Data
Application.streamingAssetsPath :   Application/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/xxx.app/Data/Raw
Application.persistentDataPath :      Application/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/Documents
Application.temporaryCachePath :   Application/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/Library/Caches

Android:
Application.dataPath :                         /data/app/xxx.xxx.xxx.apk
Application.streamingAssetsPath :      jar:file:///data/app/xxx.xxx.xxx.apk/!/assets
LoadFromFile如果用这个读取apk里面的资源的话，!assets/需要这样

Application.persistentDataPath :         /data/data/xxx.xxx.xxx/files
Application.temporaryCachePath :      /data/data/xxx.xxx.xxx/cache

Windows:
Application.dataPath :                         /Assets
Application.streamingAssetsPath :      /Assets/StreamingAssets
Application.persistentDataPath :         C:/Users/xxxx/AppData/LocalLow/CompanyName/ProductName
Application.temporaryCachePath :      C:/Users/xxxx/AppData/Local/Temp/CompanyName/ProductName

Mac:
Application.dataPath :                         /Assets
Application.streamingAssetsPath :      /Assets/StreamingAssets
Application.persistentDataPath :         /Users/xxxx/Library/Caches/CompanyName/Product Name
Application.temporaryCachePath :     /var/folders/57/6b4_9w8113x2fsmzx_yhrhvh0000gn/T/CompanyName/Product Name

Windows Web Player:
Application.dataPath :             file:///D:/MyGame/WebPlayer (即导包后保存的文件夹，html文件所在文件夹)
Application.streamingAssetsPath :
Application.persistentDataPath :
Application.temporaryCachePath :
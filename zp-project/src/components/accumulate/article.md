# 关于Mac arm64 内核下 使用nvm安装node的问题与解决方案
>>在新版的mac系统中，nvm安装nodejs时会报错如图：

<img src="https://img.imgdb.cn/item/603891615f4313ce25fca9f4.jpg" width="500px">

>>例如下载8.2这个版本，就会出现找不到二进制包，再去看 nodejs.org/dist

<img src="https://img.imgdb.cn/item/6038922d5f4313ce25fd5f05.png" width="500px">

>>发现并没有/v8.2.1/node-v8.2.1-darwin-arm64.tar.gz相关binary
>>所以此时，nvm会下载当前node版本的源码去编译，但是编译过程中会有新的问题，需要xcode，图：

<img src="https://img.imgdb.cn/item/603894e35f4313ce25005411.jpg" width="1000px">

>>安装xcode有10G+ 现在推荐无需安装xcode的方法
>>具体方法：https://github.com/nvm-sh/nvm#manual-install command + f 输入：Macs with M1 chip 有具体方法

<img src="https://img.imgdb.cn/item/603896065f4313ce250199c9.jpg" width="1000px">

### 翻译版

<img src="https://img.imgdb.cn/item/603896555f4313ce2501ef28.jpg" width="1000px">










完毕
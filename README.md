# Ivision_Weichat_Applet
兴趣团队微信小程序前端，可供后来者参考和改进；
目前有美学评价、风格迁移、卡通风格、梦境生成等功能；

在工程实现上遇到了TensorFlow和Torch在一个函数调用并运行会造成内存溢出的问题，解决办法是在服务器开了几个服务，某个服务就用TensorFlow，另一个服务就只用Torch，主服务需要TensorFlow的服务的时候向其发送请求即可；

# 示例
<div align=center><img src="https://github.com/YangRui2015/Image/blob/master/IMG_0159.PNG" height="500" alt="图片加载失败时，显示这段字"/></div>

<div align=center><img src="https://github.com/YangRui2015/Image/blob/master/IMG_0160.PNG" height="500" alt="图片加载失败时，显示这段字"/></div>


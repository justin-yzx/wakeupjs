wakeup
========
wakeup.js是在移动端html唤起app的插件，

示例代码:
=========
```html
    <!--html代码-->
    <script src="./js/wakeup.min.js"></script>
```
```javascript
      wakeup.init({
         el:'#wakeup',
         package:'com.remennovel',
         type:{
           android:true,
           ios:true
         },
         url:{
           androidDownload:'https://example.com/example.apk',
           androidJump:'example://example-host',
           iosDownload:'https://apps.apple.com/cn/app/id-example',
           iosJump:'example://example-host',
         }
       })
```

参数说明:
===========

Key  | 类型   | 说明
---|--- | ---
el| string  | 唤起app的dom元素，需要为a标签
package  | string | 唤起app的包名
type.android  | bool | 适用于Android客户端
type.ios  | bool | 适用于iOS客户端
url.androidDownload  | string | Android客户端下载地址
url.androidJump  | string | Android客户端跳转地址
url.iosDownload  | string | iOS客户端下载地址
url.iosJump  | string | iOS客户端跳转地址


注意:
============
- Android、iOS均使用scheme跳转
- el为必须
- package为必须
- type里面android、ios最少一个为true
- type里面为true的选项对应的url里面的Download也需要值
- url里面Jump地址为非必填，填上的话，优先进项跳转操作

## 闭包
> 判断是否是闭包的简单规则就是，一个函数是否能访问外部函数的变量

1、哪个是闭包
思考一下三个函数：clickHandler, immediate 和 delayedReload:
```js
let countClicks = 0;
button.addEventListener('click', function clickHandler() {
  countClicks++;
});
```
```
const result = (function immediate(number) {
  const message = `number is: ${number}`;
  return message;
})(100);
```
```
setTimeout(function delayedReload() {
  location.reload();
}, 1000);
``` 
问题：以上哪个是闭包以及为什么？

<details>
  <summary><mark><font color=darkred>答案：</font></mark></summary>
  
  1. clickHandler函数是闭包，因为它能访问外部的countCLicks。
  
  2. immediate函数不是闭包，因为它没有访问到外部的任何一个变量。
  
  3. delayedReload函数是闭包，因为它访问到全局变量location，也就是最顶层的函数域。
</details>




## Http Cache

  强缓存
  
    ○ Expires
    
    ○ Cache-Control
    
    ○ Pragma
    
  协商缓存
  
    ○ ETag/If-None-Match
    
    ○ Last-Modified/If-Modified-Since
    

  [图解 HTTP 缓存](https://www.zoo.team/article/http-cache)
 
 ![图解 HTTP 缓存](http://misc.freemanzhao.top/http-cache.jpg)
 

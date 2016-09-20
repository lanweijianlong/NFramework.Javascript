# NFramework.Javascript
自己用的javascript，待完善

## Core

## [NLock](https://github.com/hzy19860111/NFramework.Javascript/blob/master/src/nlock.js)
简单的前端锁实现，使用方法：

```javascript
  function dosomething(name){
      if(NLock.isLocked(name)) //获取是否锁定
        return;
      NLock.lock(name);  //锁定
      //dosomething
      
      NLock.unLock(name);//解锁
    }
```

# NFramework.Javascript
自己用的javascript，待完善

## [Core](https://github.com/hzy19860111/NFramework.Javascript/blob/master/src/core.js)

### 提交表单

##### window.NF.submitFormByPost(url,params)
post方式提交表单
##### window.NF.submitFormByGet(url,params)
get方式提交表单
##### window.NF.getFormByPost(url,params)
构建post方式的form表单对象
##### window.NF.getFormByGet(url,params)
构建get方式的form表单对象
##### 参数说明
url:表单请求的地址
params:请求参数（键值对），例：{name:'',age:''}

##### 示例代码
```javascript
$(function(){
  $("#btnPost").on('click',function(){
    //Get方式请求
    NF.submitFormByGet('https://www.baidu.com/s',{wd:'haha'});
  })
})
```

## [NLock](https://github.com/hzy19860111/NFramework.Javascript/blob/master/src/nlock.js)
##### 简单的前端锁实现，使用方法：

```javascript
  function dosomething(name){
      if(NLock.isLocked(name)) //获取是否锁定
        return;
      NLock.lock(name);  //锁定
      //dosomething
      
      NLock.unLock(name);//解锁
    }
```
##### 表单锁使用方法：
```javascript
$(function(){
  $("#btnSave").on('click', function (event) {
    //validate form or dosomething
    return NLock.lockSubmit();
  });        
})   
```
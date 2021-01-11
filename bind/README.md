# Javascript bind implementation

Javascript bind 實作學習心得 <br>
參考資料: <br>
https://blog.usejournal.com/implement-your-own-call-apply-and-bind-method-in-javascript-42cc85dba1b<br>
https://juejin.cn/post/6844903809206976520#heading-10

### 實作介紹

根據 MDN 對於 Function.prototype.bind() 的描述

The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
範例:

```
const module = {
  x: 42,
  getX: function() {
    return this.x;
  }
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// expected output: 42

```

### 實作步驟

-  取得調用 bind 的 function : fn
-  取得第一個參數後的其餘參數 otherArg
-  return 一個 apply 過 fn 和 otherArg 的 function

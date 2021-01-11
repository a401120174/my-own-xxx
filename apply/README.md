# Javascript apply implementation

Javascript apply 實作學習心得 <br>
參考資料: <br>
https://www.mdeditor.tw/pl/pS2y/<br>
https://juejin.cn/post/6844903809206976520#heading-6

### 實作介紹

根據 MDN 對於 Function.prototype.apply() 的描述

The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).

範例:

```
const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max);
// expected output: 7

const min = Math.min.apply(null, numbers);

console.log(min);
// expected output: 2

```

### 實作步驟

-  為 apply function 的第一個參數加上 key fn: this(調用 apply 的 function)
-  取得第二個參數 otherArg
-  呼叫 fn(...otherArg) 並取得其 return 值 result
-  刪除 key fn
-  return result

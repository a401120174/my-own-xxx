# Javascript call implementation

Javascript call 實作學習心得 <br>
參考資料: <br>
https://www.mdeditor.tw/pl/pS2y/

# 實作介紹

根據 MDN 對於 Function.prototype.call() 的描述

The call() method calls a function with a given this value and arguments provided individually.

範例:

```
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

console.log(new Food('cheese', 5).name);
// expected output: "cheese"
```

# 實作步驟

-  為 call function 的第一個參數加上 key fn: this(調用 call 的 function)
-  取得第一個參數後的其餘參數 otherArg
-  呼叫 fn(...otherArg) 並取得其 return 值 result
-  刪除 key fn
-  return result

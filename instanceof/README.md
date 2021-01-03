# Javascript instanceof operator implementation

Javascript instanceof 運算子實作學習心得 <br>
參考資料: <br>
https://medium.com/%E6%89%8B%E5%AF%AB%E7%AD%86%E8%A8%98/javascript-instanceof-operator-implementation-ee8f40f9e3b6 <br>
https://2ality.com/2014/01/new-operator.html <br>

# 實作介紹

根據 MDN 對於 operator 運算子的描述

The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value.

範例:

```
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car('Honda', 'Accord', 1998);

console.log(auto instanceof Car);
// expected output: true

console.log(auto instanceof Object);
// expected output: true
```

# 實作步驟

-  用 Object.getPrototypeOf 一層一層往上找 , 若有嚴格相等 constructor.prototype 則 return true
-  若找到 Object.prototype ( 值會是 null ), 則結束迴圈, return false

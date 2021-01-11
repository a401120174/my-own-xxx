# Javascript new operator implementation

Javascript new 運算子實作學習心得 <br>
參考資料: <br>
https://medium.com/%E6%89%8B%E5%AF%AB%E7%AD%86%E8%A8%98/javascript-new-operator-implementation-8c0d15f2b899 <br>
https://2ality.com/2014/01/new-operator.html <br>

### 實作介紹

根據 MDN, new 運算子做了下列事情

-  Creates a blank, plain JavaScript object;
-  Links (sets the constructor of) the newly created object to another object by setting the - other object as its parent prototype;
-  Passes the newly created object from Step 1 as the this context;
-  Returns this if the function doesn't return an object.

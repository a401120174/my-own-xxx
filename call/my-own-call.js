Function.prototype.myCall = function (context = globalThis) {
   // 設定 fn 為呼叫 myCall 的方法
   context.fn = this;
   // 獲取剩餘引數
   const otherArg = Array.from(arguments).slice(1);
   //呼叫這個方法，將剩餘引數傳遞進去，執行結果傳給 result
   let result = context.fn(...otherArg);
   console.log(result);
   // 刪除這個變數
   delete context.fn;
   // 返回 result 結果
   return result;
};

let foo = {
   value: 1,
};

function bar(name, age) {
   console.log(name);
   console.log(age);
   console.log(this.value);
}

bar.myCall(foo, "black", "18"); // black 18 1

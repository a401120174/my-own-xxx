Function.prototype.myApply = function (context = globalThis, args) {
   // 設定 fn 為呼叫 myApply 的方法
   context.fn = this;
   // 獲取剩餘引數
   const otherArg = Array.from(args);
   // 呼叫這個方法，將剩餘引數傳遞進去
   const result = context.fn(...otherArg);
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
bar.myApply(foo, ["black", "18"]); // black 18 1

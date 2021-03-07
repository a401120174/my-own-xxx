function deepCopy(obj, cache = new WeakMap()) {
   // 基本型別 & function
   if (obj === null || typeof obj !== "object") return obj;
   // Date 及 RegExp
   if (obj instanceof Date || obj instanceof RegExp) return obj.constructor(obj);
   // 檢查快取
   if (cache.has(obj)) return cache.get(obj);
   // 使用原物件的 constructor
   const copy = new obj.constructor();
   // 先放入 cache 中
   cache.set(obj, copy);
   // 取出所有一般屬性 & 所有 key 為 symbol 的屬性
   [...Object.getOwnPropertyNames(obj), ...Object.getOwnPropertySymbols(obj)].forEach(
      (key) => {
         copy[key] = deepCopy(obj[key], cache);
      }
   );
   return copy;
}

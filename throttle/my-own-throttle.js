function throttle(fn, wait) {
   let prev = new Date();
   return function () {
      const args = arguments;
      const now = new Date();
      // 時間差已經超過 wait 就執行一次
      if (now - prev > wait) {
         fn.apply(this, args);
         prev = new Date();
      }
   };
}

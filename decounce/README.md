# Javascript debounce implementation

Javascript debounce 實作學習心得 <br>
參考資料: <br>
https://lodash.com/docs/#debounce<br>
https://juejin.cn/post/6844903809206976520#heading-6

# 實作介紹

根據 lodash 對於 debounced function 的描述

Creates a debounced function that delays invoking func until after wait milliseconds have elapsed since the last time the debounced function was invoked.

範例:

```
// Avoid costly calculations while the window size is in flux.
jQuery(window).on('resize', _.debounce(calculateLayout, 150));

// Invoke `sendMail` when clicked, debouncing subsequent calls.
jQuery(element).on('click', _.debounce(sendMail, 300, {
  'leading': true,
  'trailing': false
}));

// Ensure `batchLog` is invoked once after 1 second of debounced calls.
var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
var source = new EventSource('/stream');
jQuery(source).on('message', debounced);

// Cancel the trailing debounced invocation.
jQuery(window).on('popstate', debounced.cancel);

```

# 實作步驟

-  建立一個 timer 變數
-  建立一個 function
-  若為 immediate , 立即執行 fn.apply(this, arguments);
-  設置一個 setTimeout , x 毫秒後執行 fn.apply(this, arguments)
-  若在 timeout 還沒到達前又呼叫了 debounce , 則重置 setTimeout

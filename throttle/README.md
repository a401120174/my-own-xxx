# Javascript throttle implementation

Javascript throttle 實作學習心得 <br>
參考資料: <br>
https://lodash.com/docs/#throttle<br>
https://juejin.cn/post/6844903809206976520#heading-19

# 實作介紹

根據 lodash 對於 throttled function 的描述

Creates a throttled function that only invokes func at most once per every wait milliseconds.

範例:

```
// Avoid excessively updating the position while scrolling.
jQuery(window).on('scroll', _.throttle(updatePosition, 100));

// Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
jQuery(element).on('click', throttled);

// Cancel the trailing throttled invocation.
jQuery(window).on('popstate', throttled.cancel);
```

# 實作步驟

-  建立一個 prev 變數儲存當下時間
-  建立一個 function
-  若 function 的 當下時間 - prev 超過 wait , 立即執行 fn.apply(this, arguments);
-  將 prev 變數更新為當下時間

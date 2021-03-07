function isArray(arr) {
   return Object.prototype.toString.call(arr) === "[object Array]";
}

function isArray(arr) {
   return arr instanceof Array;
}

function isArray(arr) {
   return arr.__proto__ === Array.prototype;
}

const arr = [1, [2, [3, [4, 5]]], 6];

function myFlat(arr) {
   return arr.reduce((res, curr) => {
      return res.concat(Array.isArray(curr) ? myFlat(curr) : curr);
   }, []);
}

function myFlat(arr) {
   while (arr.some((item) => Array.isArray(item))) {
      arr = [].concat(...arr);
   }
   return arr;
}

console.log(myFlat(arr));

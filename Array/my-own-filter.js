const arr = [1, 2, 3, 4, 5, 6, 7, 8];

function myFilter(arr, callback) {
   let res = [];

   for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i)) {
         res.push(arr[i]);
      }
   }

   return res;
}

console.log(myFilter(arr, (item) => item > 3));

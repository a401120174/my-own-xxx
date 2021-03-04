const arr = [1, 2, 3];

function myMap(arr, callback) {
   let res = [];

   for (let i = 0; i < arr.length; i++) {
      res.push(callback(arr[i], i));
   }

   return res;
}

console.log(myMap(arr, (x) => x * 2));

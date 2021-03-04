const arr = [1, 2, 3];

function myReduce(arr, callback, initValue) {
   let currValue = initValue;
   for (let i = 0; i < arr.length; i++) {
      currValue = callback(currValue, arr[i], i, arr);
   }

   return currValue;
}

console.log(myReduce(arr, (res, curr) => res + curr, 0));

const arr = [2, 4, 6];

//若沒有給初始直, 會以陣列第一項作為初始值(第一項就不會觸發callback)
function myReduce(arr, callback, initValue) {
   let currValue = initValue;
   for (let i = 0; i < arr.length; i++) {
      if (currValue === undefined) {
         currValue = arr[i];
      } else {
         currValue = callback(currValue, arr[i], i, arr);
      }
   }
   return currValue;
}

console.log(myReduce(arr, (res, curr) => (res = res + curr * 2))); //22
console.log(myReduce(arr, (res, curr) => (res = res + curr * 2), 0)); //24

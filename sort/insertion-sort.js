function insertionSort(arr) {
   //i為此輪開的牌
   for (let i = 1; i < arr.length; i++) {
      //j 為從開的牌排到頭
      for (let j = i; j > 0; j--) {
         if (arr[j] < arr[j - 1]) {
            [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
         }
      }
   }
   return arr;
}

console.log(insertionSort([8, 9, 2, 5, 1]));
// [1, 2, 5, 8, 9]

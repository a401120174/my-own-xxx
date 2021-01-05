function bubbleSort(arr) {
   // i為每次比完, 最後面已經排好的數量
   for (let i = 0; i < arr.length - 1; i++) {
      // j 從 0 到 length - 最後面已經排好的數量 - 1(因為要跟下一個比)
      for (let j = 0; j < arr.length - i - 1; j++) {
         if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
         }
      }
   }
   return arr;
}

console.log(bubbleSort([8, 9, 2, 5, 1])); // [ 1, 2, 5, 8, 9 ]

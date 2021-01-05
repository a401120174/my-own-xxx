function selectionSort(arr) {
   for (let i = 0; i < arr.length; i++) {
      let minIndex = i;
      for (let j = i; j < arr.length; j++) {
         if (arr[minIndex] > arr[j]) {
            minIndex = j;
         }
      }
      [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
   }
   return arr;
}

console.log(selectionSort([8, 9, 2, 5, 1]));
// [1, 2, 5, 8, 9]

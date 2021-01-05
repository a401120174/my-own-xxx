function mergeSort(arr) {
   if (arr.length <= 1) {
      return arr;
   }

   //切分出左右陣列
   const mid = Math.floor(arr.length / 2);
   const leftArr = arr.slice(0, mid);
   const rightArr = arr.slice(mid, arr.length);

   // 這邊用遞迴一直切切到最後才會一個一個合併
   return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(left, right) {
   let res = [];

   let l = 0;
   let r = 0;

   // 哪邊值比較小就加入進 result
   while (l < left.length || r < right.length) {
      if (r === right.length || left[l] < right[r]) {
         res.push(left[l]);
         l++;
      } else {
         res.push(right[r]);
         r++;
      }
   }

   return res;
}

console.log(mergeSort([8, 9, 2, 5, 1])); // [ 1, 2, 5, 8, 9 ]

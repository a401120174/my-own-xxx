function quickSort(arr) {
   if (arr.length < 2) return arr;
   //取第一個做基準
   const [p, ...ary] = arr;
   const left = [],
      right = [];

   ary.forEach((c) => {
      //比較小的放左邊, 反之已然
      if (c < p) left.push(c);
      else right.push(c);
   });

   return [...quickSort(left), p, ...quickSort(right)];
}

console.log(quickSort([8, 9, 2, 5, 1]));

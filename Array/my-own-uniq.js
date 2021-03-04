const arr = [1, 1, 1, 17, true, true, false, false, 3, 3, 10, {}];

function uniq(arr) {
   return [...new Set(arr)];
}

//for 迴圈每個元素, 去看他後面有沒有一樣的, 有的話就 splice (會有 side effect)
function uniq(arr) {
   for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
         if (arr[i] === arr[j]) {
            arr.splice(j, 1);
            j--; //注意
         }
      }
   }
   return arr;
}

function uniq(arr) {
   for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
         if (arr[i] === arr[j]) {
            arr.splice(j, 1);
            j--; //注意
         }
      }
   }
   return arr;
}

function uniq(arr) {
   const res = [];
   for (let i = 0; i < arr.length; i++) {
      if (res.indexOf(arr[i]) === -1) res.push(arr[i]);
   }
   return res;
}

function uniq(arr) {
   return arr.filter((item, idx) => arr.indexOf(item) === idx);
}

console.log(uniq(arr));

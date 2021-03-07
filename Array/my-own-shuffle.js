var shuffleCards = function (arr) {
   let arrCopy = arr.slice();
   for (let i = 0; i < arr.length; i++) {
      let j = getRandom(0, i); // 生成随机索引
      let temp = arrCopy[i];
      arrCopy[i] = arrCopy[j];
      arrCopy[j] = temp;
   }
   return arrCopy;
}; //随机函数（min,max）之间的随机整数

function getRandom(min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min);
}

Function.prototype.myBind = function (context) {
   let fn = this;
   const leftArgs = Array.from(arguments).slice(1);

   return function () {
      return fn.apply(context, [...leftArgs]);
   };
};

const foo = {
   num: 3,
};

function add(a, b) {
   return a + b + this.num;
}

const bindAdd = add.myBind(foo, 4, 5);

console.log(bindAdd());

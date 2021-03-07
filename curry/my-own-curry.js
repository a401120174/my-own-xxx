function curry(func, ...arg) {
   return function () {
      let args = arg.concat([].slice.call(arguments));
      if (args.length >= func.length) {
         func.apply(this, args);
      } else {
         return curry(func, ...args);
      }
   };
}

function curry(f) {
   return function currify() {
      const args = Array.prototype.slice.call(arguments);
      return args.length >= f.length ? f.apply(null, args) : currify.bind(null, ...args);
   };
}

const curryGenerator = (fn) => {
   const helper = ({ func, args, prevArgs }) => {
      if (args.length + prevArgs.length >= func.length) {
         return func(...prevArgs, ...args);
      }
      return (...newArgs) =>
         helper({
            args: newArgs,
            prevArgs: [...prevArgs, ...args],
            func,
         });
   };
   return (...args) =>
      helper({
         func: fn,
         args: args,
         prevArgs: [],
      });
};

function curry(fn, n) {
   var arity = n || fn.length;
   return function curried() {
      var args = toArray(arguments),
         context = this;
      return args.length >= arity
         ? fn.apply(context, args)
         : function () {
              var rest = toArray(arguments);
              return curried.apply(context, args.concat(rest));
           };
   };
}

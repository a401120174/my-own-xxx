function _new(constructor, ...args) {
   const obj = {};
   obj.__proto__ = constructor.prototype;

   const res = constructor.apply(obj, args);

   return typeof res === "object" ? res : obj;
}

function User(name) {
   this.name = name;
   return { myName: this.name };
}

User.prototype.hello = function () {
   return this.name;
};

const user = new User("Bob");
// {myName: "Bob"}
console.log(user);

function fuzzBuzz(n) {
   let res = [];

   for (let i = 1; i <= n; i++) {
      if (i % 15 === 0) {
         res.push("fizzBuzz");
      } else if (i % 3 === 0) {
         res.push("fizz");
      } else if (i % 5 === 0) {
         res.push("Buzz");
      } else {
         res.push("" + i);
      }
   }

   return res;
}

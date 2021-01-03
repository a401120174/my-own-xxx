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

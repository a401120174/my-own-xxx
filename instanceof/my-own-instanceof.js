function _instanceof(obj, constructor) {
   let curr = Object.getPrototypeOf(obj);

   while (curr !== null) {
      if (curr === constructor.prototype) {
         return true;
      }
      //   curr = curr.__proto__;
      curr = Object.getPrototypeOf(curr);
   }

   return false;
}

function Car(make, model, year) {
   this.make = make;
   this.model = model;
   this.year = year;
}
const auto = new Car("Honda", "Accord", 1998);

console.log(_instanceof(auto, Car));
// expected output: true

console.log(_instanceof(auto, Object));
// expected output: true

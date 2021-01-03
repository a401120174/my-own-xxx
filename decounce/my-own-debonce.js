function debounce(fn, time, immediate) {
   let timer;
   return function () {
      if (immediate) {
         fn.apply(this, arguments);
      }
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
         fn.apply(this, arguments);
      }, time);
   };
}

function sayHello() {
   console.log("My name is", this.name);
}

const amy = {
   name: "amy",
   speak: debounce(sayHello),
};

amy.speak();
// 'My name is amy'

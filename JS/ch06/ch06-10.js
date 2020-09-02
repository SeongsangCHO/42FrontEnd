let user = {
  firstName: "John",
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  }
};

setTimeout(user.sayHi, 1000); // Hello, undefined!

setTimeout(function() {
  user.sayHi();
}, 1000);

setTimeout(() => user.sayHi(), 1000);

user = { sayHi() { console.log('other user!');
}}
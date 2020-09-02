function sayHi() {
  console.log("hello");
}

setTimeout(sayHi, 1000);

let timer = setInterval(() => console.log("tic tok"), 500);

clearTimeout(timer);

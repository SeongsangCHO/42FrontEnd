//상속

let animal = {
  eats: true,
};

let rabbit = {
  jumps: true,
};

rabbit.__proto__ = animal;


//__proto__
console.log(rabbit.eats);
console.log(rabbit.jumps);

let animal2 = {
  eats: true,
  walk() {
    console.log("동물이 걷습니다.");
  }
};

let rabbit2 = {
  jumps: true,
  __proto__: animal2
};
let longEar = {
  earLength: 10,
  __proto__: rabbit2
};

longEar.walk();

rabbit2.walk();

// 아래 코드에서 Rabbit은 Animal을 상속받습니다.

// 그런데 Rabbit 객체를 만들 수가 없습니다. 무엇이 잘못된 것일까요? 코드를 수정해보세요.

class Animal {

  constructor(name) {
    this.name = name;
  }

}

class Rabbit extends Animal {
  constructor(name) {
    super(name);//this를 쓰기전 super로 부모생성자를 호출해야함.
    this.created = Date.now();
  }
}

//let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
console.log(rabbit.name);
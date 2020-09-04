let hamster = {
  stomach: [],

  eat(food) {
    this.stomach = [food];
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

// 햄스터 한 마리가 음식을 찾았습니다.
speedy.eat("apple");
//상속을 받는 객체에 stomach의 프로퍼티가 존재하지 않아서
//상속관계를 거슬러 올라가서 stomach에서 값을 넣기 때문에
//상속받는 hamster객체에 값이 push되는 것
console.log(speedy.stomach);
console.log(lazy.stomach);

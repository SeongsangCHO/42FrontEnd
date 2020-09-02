let user = {
  name: "John"
};

let user2 = {};
Object.defineProperty(user2, "name", {
  value: "John",
  // defineProperty를 사용해 새로운 프로퍼티를 만들 땐, 어떤 플래그를 true로 할지 명시해주어야 합니다.
  enumerable: true,
  configurable: true
});


let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
let descriptor2 = Object.getOwnPropertyDescriptor(user2, 'name');

console.log(JSON.stringify(descriptor, null, 2));

console.log(JSON.stringify(descriptor2, null, 2));

// writable – true이면 값을 수정할 수 있습니다. 그렇지 않다면 읽기만 가능합니다.
// - 값 변경을 할 수 없음
// enumerable – true이면 반복문을 사용해 나열할 수 있습니다. 그렇지 않다면 반복문을 사용해 나열할 수 없습니다.
// for..in과 처럼 열거할 수 없음
// configurable – true이면 프로퍼티 삭제나 플래그 수정이 가능합니다. 그렇지 않다면 프로퍼티 삭제와 플래그 수정이 불가능합니다.
// false라면, 해당 프로퍼티를 수정, 삭제할 수 없음, 변경은 가능함.

//플래그 변경 메소드
// Object.defineProperty(obj, propertyName, descriptor)


//get, set라는 접근자 프로퍼티 함수는 값을 획득, 설정할 수 있음

let who = {
  name: "secho",
  surname: "choseongsang",

  get fullName() {
    return `${this.surname} ${ this.name }`;
  },

  set fullName(value) { 
    [this.name, this.surname] = value.split(" ");
  }
};

//일반 프로퍼티처럼 사용할 수 있는 접근자 프로퍼티
//함수호출하는 것 같지 않음.
console.log(who.fullName);
//setter없이 who.fullName ="Alice cooper"; 로 하면 에러발생

who.fullName = "Alice Cooper";
console.log(who.fullName);

//user객체의 fullName이라는 프로퍼티에 get, setter추가할 수 있음.
Object.defineProperty(user, 'fullName', {
  get() {
    return `${this.name} ${this.surname}`;
  },

  set(value) {
    [this.name, this.surname] = value.split(" ");
  }
});

class User { 
  constructor(name) { 
    this.name = name;
  }
  sayHi() { 
    console.log('hey ' + this.name+' Hi!');
  }

}

let user = new User("secho");

user.sayHi();

console.log(User.__proto__);
console.log(User.prototype.sayHi);
console.log(Object.getOwnPropertyNames(User));
console.log(Object.getOwnPropertyNames(User.prototype));

let newUser = new User('newBiew');
newUser.sayHi();
user.sayHi();

//클래스는 함수의 한 종류
console.log(typeof User);  // => function

// User라는 함수를 생성, 함수 폰문은 constructor에서 가져옴
//sayHi와 같은 클래스 내에서 정의한 메소드를 User.prototype에 저장
//자바스크립트는 프로토타입 기반-언어임.
//함수가 생성될 때 constructor 생성자를 호출할 수 있는 권한이 부여됨
//new 연산자를 통해 새로운 객체를 생성할 수 있는 것
//함수 생성과 동시에 prototype객체 + prototypeLink(__proto__)가 생성됨
//prototype 객체는 prototype Link + setter로 프로퍼티가 지정됨.
//prototype Object는 빈 객체로서 생성됨 prototypeLink로 접근할 수 있음
//new 연산자로 생성된 새로운 객체는 처음 생성된 함수의 prototypeObject에 접근할 수 있는
//prototype Link 프로퍼티를 갖고 있게 됨, 따라서 각 새로운 객체의 프로토링크를 통해
//공유된 프로토타입 객체의 프로퍼티에 접근할 수 있게 되므로 "공유 또는 상속"이라는 기능을 사용


function Music(name) { 
  this.name = name;
}

// Music.sayHi = function () { 
//   console.log(this.name);
  
// }

Music.prototype.sayHi = function () { 
  console.log(this.name);
}
let musicUser = new Music("No answer");
musicUser.sayHi();


function doSomething(){}
console.log(doSomething.prototype);
doSomething.prototype.foo = "bar";
console.log(doSomething.prototype);

let foo2 = new doSomething();

console.log(foo2);



class my { 
  constructor(name) { this.name = name };
  sayHi() { console.log(this.name);
  }
}

console.log(my === my.prototype.constructor);

let myObj = new my.prototype.constructor('secho');
let myObj2 = new my('coffee');
myObj.sayHi();
myObj2.sayHi();




function makeClass(phrase) {
  return function sayHi() { 
    console.log(phrase);
  }
}
let mevius = makeClass('ciga');
mevius();

function makeClass2(phrase) { 
  return class {
    sayHi() {
      console.log(phrase);
    };
  };
}

let me2 = makeClass2('helllo');
// new없이 사용할 수 없음 X = > me2();
new me2().sayHi(); 

function isPrime(n) { 
//1과 자기 자신으로만 나눠지는 것 == 소수
//3부터 소수판별가능.
//각 i는 1부터 자기자신(i / 2)의 반 까지 반복
//나누어 떨어지면 소수
  let idx;
  for (let i = 3; i <= n; i++) {
    if (i % 2 == 0)
      continue;
    idx = 2;
    while (idx <= i - 1) {
      if (n % idx === 0) {
        console.log(i + ' is prime');
        break;
      }
      idx++;
    }
  }
}

isPrime(100);
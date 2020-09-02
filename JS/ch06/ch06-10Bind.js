const obj = {
  x: 42,
  getX: function (param) {
    if (param == undefined)
      param = 0;
    return this.x + param;
  }
};

const obj2 = {
  x: 84
}

//obj.getX는 글로벌스코프를 따르고 있음.
const unboundGetX = obj.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined



//bind함수는 내가 정한 obj로 this를 고정시킬 수 있다. 
//bind된 this객체를 받으므로, 내부 객체의 프로퍼티에 접근 가능.
const boundedGetX = unboundGetX.bind(obj2);
console.log(boundedGetX());

//call과 apply도 바인드를 하는 것인데,
//bind는 연결만하는 것이라면, call, apply는 연결 + 실행

const callGetX = obj.getX;
const applyGetX = obj.getX;
console.log(callGetX.call(obj2,30));//파라미터를 넘길 수 있음
console.log(applyGetX.apply(obj,[1]));

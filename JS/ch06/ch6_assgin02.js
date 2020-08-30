// 프로퍼티 개수 세기
// 중요도: 5
// 객체 프로퍼티 개수를 반환하는 함수 count(obj)를 만들어보세요.

// let user = {
//   name: 'John',
//   age: 30
// };

// alert( count(user) ); // 2
// 가능한 짧게 코드를 작성해 보세요.

// 주의: 심볼형 프로퍼티는 무시하고 ‘일반’ 프로퍼티 개수만 세주세요.

let user = {
  name: 'John',
  age: 30,
};

function count(obj) { 
  return Object.keys(obj).length;
}
console.log(count(user));


let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

console.log(firstName);
console.log(title);


let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];


// `rest`는 배열입니다.
console.log(rest[0]); // Consul
console.log(rest[1]); // of the Roman Republic
console.log(rest.length); // 2
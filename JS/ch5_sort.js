let arr = [1, 2, 15];

console.log(arr.sort());

function compareNumeric(a, b) { 
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

console.log(arr.sort(compareNumeric));



[1, -2, 15, 2, 0, 8].sort(function(a, b) {
  console.log(( a + " <> " + b ));
});

arr.sort((a, b) => a - b);


//누산기

let acc = [1, 2, 3, 4, 5];
//초기값을 0으로 할당, sum은 이전함수 호출 값,
//current는 원소값 1
//sum + current는 반환값.
let result = acc.reduce((sum, current) => sum + current, 0);


//군입대 가능한지 판별

let army = {
  minAge: 20,
  maxAge: 30,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  }
}

let users = [
  { age : 16},
  { age : 25},
  { age : 30},
  { age: 33 },
  { age : 48},
]

let soliders = users.filter(army.canJoin, army);

for (value of soliders)
  console.log(value.age +" can join in army age")

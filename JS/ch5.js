let arr = ["I", "study", "Javascript", "right", "now"];

arr.splice(0, 3, "Let's", "dance");

console.log(arr);

let removed = arr.splice(0, 2);

console.log(removed);
console.log(arr);

arr.splice(2, 0, "Add1", "Add2")
console.log(arr);


let num = [1, 2, 5];
//인덱스가 음수일 경우 배열의 맨 끝부터 시작
num.splice(-1, 1);


console.log(num);



console.log(arr.concat(num, removed));


num.forEach(function (value, idx) {
  console.log(value);
});
// 배열 복사본을 정렬하기
// 중요도: 5
// 문자열이 담긴 배열 arr을 복사한 다음 해당 배열을 정렬해봅시다. 단 이때 arr은 변경되면 안 됩니다.

// 함수 copySorted(arr)는 복사 후 정렬된 배열을 반환해야 합니다.

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (no changes)

let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) { 
  return arr.sort();
}

let sorted = copySorted(arr)
console.log(sorted);
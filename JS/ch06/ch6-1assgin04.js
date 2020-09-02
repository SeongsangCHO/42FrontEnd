// 단일 연결 리스트 출력하기
// 중요도: 5
// 재귀와 스택에서 설명한 바 있는, 단일 연결 리스트(single-linked list)가 있다고 가정해 봅시다.

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};
// 리스트 내 항목을 차례대로 하나씩 출력해주는 함수 printList(list)를 만들어보세요.
function printList(list) {
  console.log(list.value);
  if (list.next)
    printList(list.next);
}
console.log(printList(list));

// 반복문과 재귀를 사용한 답안을 각각 만들어봅시다.
function printListReverse(list) { 
  // let tmp = list;
  // while (tmp) { 
  //   console.log(tmp.value);
  //   tmp = tmp.next;
  // }
  if(list.next)
    printListReverse(list.next);
  console.log(list.value);
  
}
console.log(printListReverse(list));

// 그리고 재귀를 사용한 것과 재귀를 사용하지 않은 것 중 어떤 게 더 좋은 코드인지 생각해봅시다.
function inBetween(a, b) {
  return function (x) {
    console.log(x);
    //x는 filter에서 던져주는 매개변수
    //filter 렉시컬 <- inBetween의 a,b에 접근하는 return 렉시컬(filter의 x를 참조함)
    return x >= a && x <= b;
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter(inBetween(3,6)) );

// 주어진 숫자까지의 모든 숫자 더하기
// 중요도: 5
// 숫자 1 + 2 + ... + n을 계산하는 함수 sumTo (n)을 만들어보세요.

// 예시:

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
// 아래 방법을 사용해 세 가지 답안을 만들어보세요.

// for 반복문 사용하기
// 재귀 사용하기(n > 1일 때 sumTo(n) = n + sumTo(n-1))
// 등차수열 공식 사용하기
// 예시:

function sumTo(n) { 
  let sum = 0;
  for (let i = 1; i <= n; i++) { 
    sum += i;
  }
  return sum;
}
console.log(sumTo(100));

function sumRecursive(n) {
  if (n == 1)
    return 1;
  else
    return n + sumRecursive(n - 1);
}
console.log(sumRecursive(100));

function sumFomula(n){ 
  return ((n * (n + 1)) / 2);
}
console.log(sumFomula(100));

// alert( sumTo(100) ); // 5050
// 더 생각해보기 1: 세 가지 방법 중 어떤 방법이 가장 빠른가요? 어떤 방법이 가장 느린가요? 이유도 함께 제시해주세요.
// 재귀방법이 느림, 수열방법이 빠름. 재귀는 실행컨텍스트에 계속해서 스택이 쌓이므로 메모리를 계속 차지함.
// 수열은 반복필요없이 1번의 연산으로 끝.

// 더 생각해보기 2: 재귀를 사용해 sumTo (100000)를 계산할 수 있을까요?
// 안됨. 실행컨텍스트는 엔진마다 다르지만 보통 10000번의 호출만 가능함.
// maximum call stack size exceeded 에러가 발생.
// 일초 간격으로 숫자 출력하기
// 중요도: 5
// from에 명시한 숫자부터 to에 명시한 숫자까지 출력해주는 함수 printNumbers(from, to)를 만들어보세요. 숫자는 일 초 간격으로 출력되어야 합니다.

// 두 가지 방법을 사용해 함수를 만드셔야 합니다.

// setInterval을 이용한 방법
// 중첩 setTimeout을 이용한 방법

function printNumbers(from, to) {
  let time = from;

  let timer = setInterval(() => {
    console.log(time);
    if (time == to) {
      clearInterval(timer);
    }
    time++;
  }, 1000);
}

// printNumbers(7, 10);


function printNumbersTimeout(from, to) { 
  let time = from;

  setTimeout(function timer() { 
    console.log(time);
    if (time < to)
      setTimeout(timer, 1000);
    time++;
  },1000)
}

printNumbersTimeout(11, 13);
let now = new Date(0);

console.log(now);
//1970 01 01부터 흘러간 ms시간을 나타내는 타임스탬프

let dateString = new Date("2020-08-30");
console.log(dateString);

console.log(dateString.getUTCFullYear());
console.log(dateString.getUTCMonth());
console.log(dateString.getDate());
console.log(dateString.getUTCHours());
//현지 시간과 표준 시간의 차이(분)를 반환합니다.
//한국은 UTC + 9 : 00 이므로 -540반환
console.log(dateString.getTimezoneOffset());


let date2016 = new Date(2016, 1, 28);
date2016.setDate(date2016.getDate() + 2);
console.log(date2016); // 2016년 3월 1일

let date2017 = new Date(2017, 1, 28);
date2017.setDate(date2017.getDate() + 2);
console.log(date2017);

let date2018 = new Date(2018, 1, 28);
date2018.setDate(date2018.getDate() + 2);
console.log(date2018);

let dat2019 = new Date(2019, 1, 28);
dat2019.setDate(dat2019.getDate() + 2);
console.log(dat2019);
 // 2016년 3월 1일

 let dat2020 = new Date(2020, 1, 28);
 dat2020.setDate(dat2020.getDate() + 2);
console.log(dat2020);

if (dat2020.getDate() == 1)
  console.log('2020 is 윤년');








function diffSubtract(date1, date2) {
  return date2 - date1;
}

function diffGetTime(date1, date2) {
  return date2.getTime() - date1.getTime();
}

function bench(f) {
  let date1 = new Date(0);
  let date2 = new Date();

  let start = Date.now();
  for (let i = 0; i < 100000; i++) f(date1, date2);
  return Date.now() - start;
}

let time1 = 0;
let time2 = 0;

// 함수 bench를 각 함수(diffSubtract, diffGetTime)별로 10번씩 돌립니다.
for (let i = 0; i < 10; i++) {
  time1 += bench(diffSubtract);
  time2 += bench(diffGetTime);
}

console.log( 'diffSubtract에 소모된 시간: ' + time1 );
console.log( 'diffGetTime에 소모된 시간: ' + time2 );
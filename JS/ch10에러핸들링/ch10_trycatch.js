try {

  console.log('try 블록 시작');  // (1) <--

  lalala; // 에러, 변수가 정의되지 않음!

  console.log('try 블록 끝(절대 도달하지 않음)');  // (2)

} catch(err) {

  console.log(`에러가 발생했습니다!`); // (3) <--

}

console.log('rows');


//try catch는 동기 함수만 잡아낼 수 있음
// try {
//   setTimeout(function() {
//     noSuchVariable; // 스크립트는 여기서 죽습니다.
//   }, 1000);
// } catch (e) {
//   console.log( "작동 멈춤" );
// }

//스케줄된 코드를 처리하려면, 그 함수 내에서 잡아내야함

setTimeout(function () {
  try {
    lala;a
  } catch (error) {
    console.log('error 발생');
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);    

  }
});
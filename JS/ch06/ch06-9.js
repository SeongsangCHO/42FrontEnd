function slow(x) {
  // CPU 집약적인 작업이 여기에 올 수 있습니다.
  console.log(`slow(${x})을/를 호출함`);
  return x;
}

function cachingDecorator(func) {
  let cache = new Map();
  console.log('new Cache');
  
  return function(x) {
    if (cache.has(x)) {    // cache에 해당 키가 있으면
      return cache.get(x); // 대응하는 값을 cache에서 읽어옵니다.
    }

    let result = func(x);  // 그렇지 않은 경우엔 func를 호출하고,

    cache.set(x, result);  // 그 결과를 캐싱(저장)합니다.
    return result;
  };
}

slow = cachingDecorator(slow);

//slow(x)는 cachingDecorator의 return에 선언된 function을 호출함
console.log( slow(1) ); // slow(1)이 저장되었습니다.
console.log( "다시 호출: " + slow(1) ); // 동일한 결과

console.log( slow(2) ); // slow(2)가 저장되었습니다.
console.log( "다시 호출: " + slow(2) ); // 윗줄과 동일한 결과
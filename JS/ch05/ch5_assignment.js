// 01 border-left-width를 borderLeftWidth로 변경하기

function camelize(str) { 
  return str.split('-')//my, short, string 배열형태임
    .map((value, idx) => { 
      if (idx != 0)
        return value[0].toUpperCase() + value.slice(1);
      return value;
    })//1번째 원소의 첫번째 글자를 대문자로 변경
    .join('');
}


console.log(camelize('my-short-string'));
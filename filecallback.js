//동기
const fs = require('fs');

fs.readFile('text.txt', 'utf-8', function (err, data) {
  if (err) return console.log(err);
  console.log('1번', data.toString()); //데이터를 문자열로 출력 toStfing

  fs.readFile('text.txt', 'utf-8', function (err, data) {
    if (err) return console.log(err);
    console.log('2번', data.toString()); //데이터를 문자열로 출력 toStfing

    fs.readFile('text.txt', 'utf-8', function (err, data) {
      if (err) return console.log(err);
      console.log('3번', data.toString()); //데이터를 문자열로 출력 toStfing

      fs.readFile('text.txt', 'utf-8', function (err, data) {
        if (err) return console.log(err);
        console.log('4번', data.toString()); //데이터를 문자열로 출력 toStfing
      });
    });
  });
});

console.log('1');
console.log('4');
console.log('3');
console.log('2');
//1번 테스트용 텍스트 입니다.
//2번 테스트용 텍스트 입니다.
//3번 테스트용 텍스트 입니다.
//4번 테스트용 텍스트 입니다.

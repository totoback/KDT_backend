const fs = require('fs'); //파일 불러오기

// fs.readFile(callback){
//   callback(err,data);
// }

fs.readFile('text.txt', 'utf-8', function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
//text.txt 파일 안에 있는 (테스트용 텍스트 입니다.)가 출력

//파일 생성
const str = `파일 쓰기 테스트`;
fs.writeFile('text1.txt', str, 'utf-8', function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('파일 쓰기 완료');
  }
});

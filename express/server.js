// @ts-check
const express = require('express');

const server = express();

const PORT = 4000;

// (요청, 응답, 다음 미들웨어를 호출해준다.)
// '/'는 요청 주소
// http://localhost:4000/api
server.use('/', (req, res, next) => {
  console.log(`미들웨어 1번`);
  // res.send('응답  종료');
  req.reqTime = new Date();
  next();
});

server.use((req, res, next) => {
  console.log(`미들 웨어 2번`);
  res.send(`요청 시간은 ${req.reqTime}입니다!`);
  // next();
});

server.use((req, res, next) => {
  console.log(`미들 웨어 3번`);
  next();
  console.log(`next 아래에 있는 콘솔 로그`);
});

server.listen(PORT, () => {
  console.log(`익스프레스 서버는 ${PORT}번 포트에서 작동 중입니다!`);
});

// @ts-check
const express = require('express');
const app = express();
const PORT = 1324;
app.get('/', (req, res) => {
  res.send('GET 메소드');
});
app.get('/', (req, res) => {
  res.send('POST 메소드');
});
app.get('/', (req, res) => {
  res.send('PUT 메소드');
});
app.get('/', (req, res) => {
  res.send('DELETE 메소드');
});

//마지막에 불러오는
app.listen(PORT, () => {
  console.log(`서버가 ${PORT}번에서 실행 중입니다!`);
});

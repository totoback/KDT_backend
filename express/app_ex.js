const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 4000;

const postRouter = require('./routes/post_ex');
//post라우터 요청 처리 라우터

app.set('view engine', 'ejs');
//ejs로 구성 선언
app.use(express.static('public'));
//public을 상위 폴더로 변경

// body-parser 관련
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/post', postRouter);
//post 경로 postRouter로 등록

app.get('/', (req, res) => {
  res.send('Hello');
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(err.statusCode);
  res.send(err.message + '<br/><a href="/">홈으로</a>');
});

app.listen(PORT, () => {
  console.log(`${PORT}번에서 작동중`);
});

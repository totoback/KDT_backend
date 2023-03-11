const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 4000;

const mainRouter = require('./routes');
const userRouter = require('./routes/users'); //라우터가 사용할 주소 알려주기
const postsRouter = require('./routes/posts');

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); //외우자

//localhost:4000
app.use('/', mainRouter); //4000으로 들어갈때 나오는 메인 라우터
//localhost:4000/users
app.use('/users', userRouter); //user라는 요청이들어오면 userRouter이 담당한다.
//localhost:4000/posts
app.use('/posts', postsRouter);

app.get('/', (req, res) => {
  res.send(`Hello, Express world`);
});

//use는 다 받기 때문에 use를 사용
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(err.statusCode);
  res.send(err.message + '<br/><a href="/">홈으로</a>');
});

app.listen(PORT, () => {
  console.log(`${PORT}번에서 실행 중!`);
});

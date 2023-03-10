const express = require('express');
const app = express();
const PORT = 4000;

const mainRouter = require('./routes');
const userRouter = require('./routes/users'); //라우터가 사용할 주소 알려주기

app.set('view engine', 'ejs');

app.use('/', mainRouter); //4000으로 들어갈때 나오는 메인 라우터
app.use('/users', userRouter); //user라는 요청이들어오면 userRouter이 담당한다.
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`Hello, Express world`);
});

app.listen(PORT, () => {
  console.log(`${PORT}번에서 실행 중!`);
});

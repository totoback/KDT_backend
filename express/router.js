//@ts-check
const express = require('express');

const userRouter = require('./routes/users'); //라우터가 사용할 주소 알려주기

const app = express();
const PORT = 4000;

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use('/users', userRouter); //user라는 요청이들어오면 userRouter이 담당한다.

app.get('/', (req, res) => {
  res.send(`Hello, Express world`);
});

app.listen(PORT, () => {
  console.log(`${PORT}번에서 실행 중!`);
});

//@ts-check
const express = require('express');

const app = express();
const PORT = 4000;

const USER = {
  1: {
    email: 'tetz',
    name: '이효석',
  },
};

const userRouter = express.Router();

app.use('/users', userRouter);

userRouter.get('/', (req, res) => {
  res.send(USER);
});

userRouter.put('/modify/:id', (req, res) => {
  if (req.query.email && req.query.name) {
    //파라미터로 이메일과, 이름이 들어왔을 때
    if (req.params.id in USER) {
      USER[req.params.id] = {
        email: req.query.email,
        name: req.query.name,
      };
      res.send('회원 정보 수정 완료!');
    } else {
      res.send('해당 ID를 가진 회원이 존재하지 않습니다.');
    }
  } else {
    //쿼리 입력이 잘못 되었거나, 파라미터 입력이 잘못되었거나
    res.send('잘못 된 쿼리 입력입니다.');
  }
});

userRouter.delete('/delete/:id', (req, res) => {
  if (req.params.id in USER) {
    delete USER[req.params.id];
    res.send(`회원 삭제 완료`);
  } else {
    res.send('해당 ID를 가진 회원이 존재하지 않습니다.');
  }
});

app.listen(PORT, () => {
  console.log(`${PORT}번에서 실행 중!`);
});

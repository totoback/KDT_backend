//@ts-check
//express 사용 기본

const express = require('express');
// express 프레임워크 사용 선언

const server = express();
//express를 server라는 이름으로 변수화

const PORT = 4000;
//4000번 포트

const router = express.Router();
//express 라우터를 router라는 이름으로 변수화

server.use('/users', router);
// users라는 특정주소를 router객체로 라우팅 분리하기
const usersData = [
  {
    userId: '최',
    name: 'joung',
    email: '12@naver.com',
  },
  {
    userId: '박',
    name: 'choi',
    email: '1004@naver.com',
  },
];

server.use('/', (req, res) => {
  res.send(usersData);
});
//usersData 객체 요청하기

//post 추가 메소드
router.post('/add', (req, res) => {
  const newDatas = {
    userId: req.query.userId,
    name: req.query.name,
    email: req.query.email,
  };
  usersData[usersData.length] = newDatas;
  res.send('성공');
});

router.delete('/delete:id', (req, res) => {
  res.send(usersData[req.params.id]);
  //req.params.id를 userData의 index로 받음
  usersData.splice(req.params.id, 1);
});

router.put('/update:id', (req, res) => {
  usersData[req.params.id].userId = req.query.userId;
  usersData[req.params.id].name = req.query.name;
  usersData[req.params.id].email = req.query.email;
  res.send('변경 성공');
});

server.listen(PORT, () => {
  console.log(`포트번호 ${PORT}번 실행`);
});

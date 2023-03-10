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

server.use('/', (req, res) => {
  res.send('hi');
  // console.log('h2');
});
// 4000번 포트로 접근 시 hi를 응답해준다.
// res.send는 console.log와 다르다 (res.send는 요청에 응답 해주는 함수)
// console.log로 찍으면 콘솔에 찍힌다.
// 위의 server.use는 4000번 포트 접근 요청시 res.send로 hi 보내준다.

const userData = [
  // express router를 통해 요청 메소드 분리
  {
    userId: 'id',
    name: 'joung',
    email: '123@naver.com',
  },
  {
    userId: 'choi',
    name: 'sorry',
    email: '123555@naver.com',
  },
];
//사용자들 데이터 초기 세팅

//userData읽기
router.get('/', (req, res) => {
  res.send(userData);
});

//post 추가 메소드
router.post('/add', (req, res) => {
  const newData = {
    userId: req.query.userId,
    name: req.query.name,
    email: req.query.email,
  }; //userData에 넣어줄 새로운 newData
  userData[userData.length] = newData;
  // 배열[배열.length-1]는 배열의 마지막 요소이므로
  // 배열[배열.length]은 배열의 마지막 요소 바로 그 다음에 빈요소를 만드는 개념
  // userData[userData.length] = newData; : 빈 요소에 새로운 데이터 추가
  res.send(
    `id:${req.query.userId}, name:${req.query.name}, email:${req.query.email}추가`
  );
});
router.delete('/remove:id', (req, res) => {
  res.send(userData[req.params.id]);
  // req.params.id를 userData의 index로 받음
  userData.splice(req.params.id, 1);
  // splice 메소드를 통해 userData[req.params.id]를 지움
  // DELETE로 요청 : userData[1]삭제, 삭제된 요소 res.send()
});

//put 수정 메소드
router.put('/update:id', (req, res) => {
  userData[req.params.id].userId = req.query.userId;
  userData[req.params.id].name = req.query.name;
  userData[req.params.id].email = req.query.email;
  res.send('수정완료');
  // PUT요청 : userData[1]의 userId, name, email을 ‘바꿈’으로 수정
});

server.listen(PORT, () => {
  console.log(`포트번호 ${PORT}번 실행`);
});
//4000번 포트를 열고, 화살표 함수 실행 (포트번호 4000번 실행 콘솔 출력)

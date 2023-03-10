// CommonJS 방식
// const animalMoudle = require('./animals');

// console.log(animalMoudle);
// console.log(animalMoudle.animals);
// animalMoudle.showAnimals();

//밑에 내용을 한줄로 간략하게 만든것
// module.exports = {
//   animals,
//   showAnimals,
// };

//구조 분해 할당 -> 친숙해져야함
const { animals, showAnimals } = require('./animals');
console.log(animals);
showAnimals();

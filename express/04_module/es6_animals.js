// es6
//export 뺄꺼 앞에 export넣기
const animals = ['puppy', 'cat'];

function showAnimals() {
  animals.map((el) => console.log(el));
}

export { animals as ani, showAnimals as show };

const fs = require('fs').promises;

const data = await fs.readFile();
async function main() {
  let data = await fs.readFile('test1.txt', 'utf-8');
  console.log('1번', data.toString());
  data = await fs.readFile('test2.txt', 'utf-8');
  console.log('2번', data.toString());
  data = await fs.readFile('test3.txt', 'utf-8');
  console.log('3번', data.toString());
  data = await fs.readFile('test4.txt', 'utf-8');
  console.log('4번', data.toString());
}
main();

// const doNy = (value) => {
//   for (let i = 1; i <= 100; i++) {
//     console.log(`${i}. Con dở hơi mày bị lms đấy`);
//   }
// };
// doNy(100);
/** Vòng lặp - loop
 * 1. for: lặp với điều kiện đúng
 * 2. for/in: lặp qua key của đối tượng
 * 3. for/of: lặp qua value của đối tượng
 * 4. white: lặp khi điều kiện đúng
 * 5. do/white: lặp ít nhất một lần, sau đó lặp khi điều kiện đúng
 *
 */
// hàm lấy số ngẫu nhiên trên một khoảng
const getRandNumbers = (min, max, length) => {
  let array = [];
  for (let i = 0; i < length; i++) {
    let randomNumber = Math.random() * (max - min) + min;
    let numRound = Math.round(randomNumber);
    array.push(numRound);
  }
  return array;
};
console.log(getRandNumbers(2, 10, 4));

// vòng lặp for/in
// for in với object
const obj = { name: "van anh", age: 26, country: "Vietnam" };
for (let key in obj) {
  console.log(
    `lấy được dữ liệu là các key: ${key} từ đó ta lấy được dữ liệu: ${obj[key]}`
  );
}
//for in với mảng
const arr = ["Linh", "Thịnh", "Hồng"];
for (let key in arr) {
  console.log(`Truong hop for in voi mang: ${key}: ${arr[key]}`);
}
// for in với chuỗi
const str = "Hía hía";
for (let key in str) {
  console.log(`Truong hop for in voi chuoi: ${key}: ${str[key]}`);
}
// for of: lấy ra từng phần tử của mảng hoặc là tách lấy từng kí tự của chuỗi
let languages = ["Js", "PHP", "Java"];
for (let value of languages) {
  console.log(value);
}
// while:
var i = 0;
while (i < 100) {
  i++;
}
// vòng lặp do/while: chạy 1 lần r mới kiểm tra điều kiện
var i = 0;
let isSuccess = false;
do {
  // code..
  i++;
  console.log(`Nạp thẻ lần: ${i}`);
  if (false) {
    isSuccess = true;
  }
} while (!isSuccess && i < 3);
// break && continous
for (let i = 0; i < 10; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
  // if (i >= 5) {
  //   break;
  // }
}
// vòng lặp lồng nhau - Nested loop
let myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
for (let i = 0; i < myArr.length; i++) {
  for (let j = 0; j < myArr[i].length; j++) {
    console.log(` ${typeof myArr[i][j]}`);
  }
}
// học đệ quy

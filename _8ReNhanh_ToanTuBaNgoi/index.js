// Rẽ nhánh if else
let date = 3;
if (date === 2) {
  console.log("hom nay la thu 2");
} else if (date === 3) {
  console.log("hom nay la thu 3");
} else {
  console.log(`Hom nay khong phai la thu ${date}`);
}
// rẽ nhánh switch case
switch (date) {
  case 2:
    console.log("Thu 2");
    break;
  case 3:
    console.log("Thu 3");
    break;
}
// Toán tử ba ngôi
let course = {
  name: "Js",
  coin: 300,
};
let result = course.coin > 0 ? `${course.coin} Coins` : "Free";
console.log(result);
const doNy = (value) => {
  for (let i = 0; i < value; i++) {
    console.log(`${i}. I love you <3`);
  }
};
doNy(100);

// bai tap
// bai 1:
function bai1() {
  let style = ["jass", "blues", "y2k", "vintage", "donche"];
  // them phan tu vào cuối mang
  // style.push("Rock-n-Roll");
  // console.log(style);
  var lengthArr = style.length;
  var le = Math.floor(lengthArr / 2);
  // console.log(le);
  var chan = Math.floor(lengthArr / 2 + 1);
  console.log(chan);
  if (lengthArr % 2 == 0) {
    style.splice(le - 1, 0, "Classics");
  } else {
    style.splice(chan - 1, 1, "Classics");
  }
  console.log(style);
}
// bai1();

// bai 2:
function sumInput() {
  let arr = [];
  // lap prompt
  for (;;) {
    var item = prompt("Nhap cai can nhap: ");
    if (item === null || item === "" || isNaN(item)) {
      break;
    }
  }
  let number = parseFloat(item);
  arr.push(number);
  var sum = 0;
  for (let i = 0; i <= arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
var ketqua = sumInput();
console.log(`Tong cac so trong danh sach la ${ketqua}`);

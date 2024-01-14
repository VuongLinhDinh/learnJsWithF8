let age;
let myinfo = {
  name: "LInhDinh",
  ["age"]: "20",
  address: "LInhDinh",
  "number-phone": "LInhDinh",
  getName: function () {
    return this.name;
  },
};
// thêm một key và value
myinfo.email = "linhvdph38932@fpt.edu.vn";
myinfo["number-house"] = "20 Tan Hoa";
// lay value neu khong cos tra ve undefined
console.log(myinfo.email);
console.log(myinfo["address"]);
console.log("lay ham trong object: " + myinfo.getName());
// xoa key value
delete myinfo["number-phone"];
// ten goi cac phan tu trong object
// function() --> phương thức/method
// các phần tử khác --> thuộc tính/property
//--------------------------------------------------------------------------

//object constructer
function User(firsName, lastName, avatar) {
  this.firsName = firsName;
  this.lastName = lastName;
  this.avatar = avatar;
}
let teacher = new User("Long", "Nguyen", "avt");
let student = new User("Linh", "Vuong", "avt");
// thêm thuộc tính cho object contructer
teacher.subjectsTaught = "Toán - Lý";
student.grade = 10;
console.log(teacher.subjectsTaught);
//-----------------------------------------------------------------------
/**
 * Object prototype
 *  1. Prototype là gì??
 *  2. Sử dụng khi nào??
 *
 */
function User(firsName, lastName, avatar) {
  // thêm các contructer
  this.firstName = firsName;
  this.lastName = lastName;
  this.avatar = avatar;
  this.getName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}
// tạo thêm thuộc tính / phương thức bằng object prototype
User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};
let user = new User("linh", "vuong", "avt");
let user01 = new User("vananh", "vuong", "avt");

//--------------------------------------------------------------------------

// Đối tượng Date
let dateNow = new Date(); // trả về kiểu object có thẻ truy xuất được các thành phầnd của đối tượng
let dateString = Date(); // trả về một chuỗi đơn thuần
console.log(dateNow.getDay());
//----------------------------------------------------------------------------
// Math object
/**
 * Thuộc tính:
Math.PI: Đại diện cho hằng số toán học Pi (khoảng 3.14159).
Math.E: Đại diện cho hằng số toán học số Euler (khoảng 2.718).

Phương thức:
Math.abs(x): Trả về giá trị tuyệt đối của một số x.
Math.ceil(x): Trả về số nguyên lớn nhất lớn hơn hoặc bằng một số x.
Math.floor(x): Trả về số nguyên lớn nhất nhỏ hơn hoặc bằng một số x.
Math.round(x): Làm tròn một số x đến số nguyên gần nhất.
Math.max(x1, x2, ..., xn): Trả về số lớn nhất trong các số đã cho.
Math.min(x1, x2, ..., xn): Trả về số nhỏ nhất trong các số đã cho.
Math.pow(x, y): Trả về số mũ y của cơ số x.
Math.sqrt(x): Trả về căn bậc hai của một số x.
Math.random(): Trả về một số giả ngẫu nhiên từ 0 (bao gồm) đến 1 (ngoại trừ).
Math.sin(x), Math.cos(x), Math.tan(x): Các hàm lượng giác.
Math.log(x): Trả về logarith tự nhiên (cơ số e) của một số x.
Math.exp(x): Trả về số Euler mũ x.
 */

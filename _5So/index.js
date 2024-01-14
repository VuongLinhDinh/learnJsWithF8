/**
 * Phương thức	      Vai trò
Number.isFinite():     Xác định xem giá trị đã cho có phải là số hữu hạn hay không. Trả về boolean
Number.isInteger():    Xác định xem giá trị đã cho có phải là số nguyên hay không. Trả về boolean
Number.parseFloat():   Chuyển đổi chuỗi đã cho thành một số dấu phẩy động
Number.parseInt():     Chuyển đổi chuỗi đã cho thành một số nguyên
Number.prototype.toFixed(): Chuyển đổi và trả về chuỗi đại diện cho số đã cho, có số chữ số chính xác sau dấu thập phân
Number.prototype.toString(): Chuyển đổi và trả về số đã cho dưới dạng chuỗi
 * 
 */
// -----------------------------------------------------------------------------------------

/**
 * kiểu số(Nuumber) trong Js
 *  1. Cách tạo ra một giá tri Number
 *      - Cách tạo
 *      - Dùng cách nào. Tại sao??
 *      - Kiểm tra data type
 *  2. Làm việc với Number
 *      - To string
 *      - To Fixed
 */
// phần 1
// cách 1: cách này tạo số có kiểu dữ liệu number
let age = 20;
let PI = 3.14;
// cách 2: cách này tạo ra số có kiểu dữ liệu object
let ortherNumber = new Number(9);
// => ưu tiên dùng ccachs 1 hơn
// kiểm tra kiểu dữ liệu
console.log(typeof age, typeof PI, typeof ortherNumber); //object
let result = 20 / "linh";
// kiểm tra một số có kiểu dữ liệu nà Nan
console.log(isNaN(result)); // NaN
// Phần 2 js nuumber methods
// phương thức biến số thành chuỗi
console.log(age.toString());
// phương thức làm tròn số thập phân
// không truyền tham số
console.log((5.678).toFixed());
// Có truyền tham số: là số chữ số lấy sau dấu phảy
console.log((5.678).toFixed(2));

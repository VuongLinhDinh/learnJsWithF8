/**
    1. Hàm?
    - Một khối mã
    - Làm một việc cụ thể

    2. Loại hàm
    - Built-in
    - Tự định nghĩa

    3. Tính chất
    - Không thực thi khi định nghĩa
    - Sẽ thực thi khi được gọi
    - Có thể nhận thâm số
    - Có thể trả về 1 giá trị
    
    4. Tạo hàm đầu tiên
    - quy tắc đặt tên hàm: az, AZ, 09, _ , $
    - Không được đặt số ở đầu tên
 */
function showDialog() {
    // code
    alert('Hi mina');

}
// Toans tuwr call()
// showDialog()
/**
    Tham số trong JS

    1. Tham số: 
        - Định nghĩa -> bản chất là tách phần tham só ra một biến có tên cụ thể
        - Kiểu dữ liệu -> bất kì kiểu dữ liệu nào mà js chấp nhận 
        - Tính private -> dùng nội bộ trong hàm, khi ra ngoài nó không cso giá trị 
        - 1 tham số     |
        - Nhiều tham số | -->> có thể thêm 1 học nhiều tham số cho hàm

    2. Truyền tham số
        - 1 tham số     |
        - Nhiều tham số | -->> cũng có thể gọi 1 hay nhiều đói số

    3. Argument?
        - Đối tượng argumnet
        - Giơi thiệu vòng for

 */
function writeLog(message) {
    console.log(message)
}
writeLog('Hai xin choa cac cau') // -> đối số

// argument -> là một mảng tham số
function testArg() {
    console.log(arguments)

}
testArg('chao lan 1', 'chao lan 2', 'khong chao nua')
// for of
function testForof() {
    let myStr = '';
    for (let thamso of arguments) {
        myStr += `${thamso},`
    }
    console.log(myStr)
}
testForof('phan tu 1', 'phan tu 2', 'phan tu 3')
/**
 * Return trong hàm
 * 
 * 
 */
function sum(a, b) {
    return a + b;
    // các câu lệnh bên dưới hàm return sẽ bị bỏ qua không được chạy
}
let result = sum(1, 3);
console.log(result)
/**
 * Hiểu hơn về hàm
 * 1. Khi hàm bị đặt tùng tên ->> thì nếu gọi hàm đó sẽ gọi hàm khai báo sau(hàm khai báo trc bị ghi đè)
 * 2. Khai báo biến trong hàm ->> Khai báo được ok
 * 3. Có thể định nghĩa hàm trong hàm không ->> ok làm được
 */

/**
 * Các loại hàm
 * 1. Declaration function
 * 2. Exession funtion
 * 3. Arrow function
 * 
 */
// declaration function
function showMessage() {

}
// exession funtion
var showMessage2 = function() {

}
// alert('Hi javascript!')
/**
 * 
 * 
 * 
 */

// Khai báo biến
var fulName = 'Vuong Dinh Linh';
var age = 19;

// Gọi hàm thông báo 
// alert(fulName);
// alert(age);

/**
 * Giới thiệu một số hàm buil-in: Hàm được xây dựng sẵn
 *  1.Alret
 *  2.Console
 *  3.Confirm
 *  4.Prompt
 *  5.Set timeout
 *  6.Set interval
 */

console.log('Day la dong log')
console.log(fulName)

confirm('Xac nhan ban du tuoi!!'); // Tạo ra hộp thoại confỉm

prompt('Ghi chu!')// giống confirm nhưng có thêm ô input

setTimeout (function() {
    alert('Thong Bao!')

}, 1000)// Cho một đoạn code chạy sau một khoảng thời gian( đơn vị ms)

setInterval(function(){
    // console.log('Day la log'+ Math.random())
}, 1000)
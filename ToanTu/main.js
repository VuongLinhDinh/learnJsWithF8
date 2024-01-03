/**
        Giới thiệu về toán tử
    1. Toán tử số học - Arithmetic
    2. Toán tử gán - Assignment
    3. Toán tử so sánh - Comparison
    4. Toán tử logic - Logical
 */

    /**
        Toán tử số học 

        +   --> Cộng 
        -   --> Trừ 
        *   --> Nhân
        /   --> Chia
        %   --> Chia Lấy Dư
        ++  --> Tang 1 giá trị số
        --  --> Giảm 1 giá trị số
 
     */
    // Kĩ hơn về toán tử ++ và --
    // Prefix & pótfix
    var a = 6;

    a++;
 
    console.log(a);

    // Toán tử chuôi 
     var firsName = 'dinh';
     var lastName = 'linh';
     var name = 'Linh';
     name += firsName;


     console.log(firsName + lastName);
     console.log(name);


   // Toán tử so sánh
   var a = 1;
   var b = 2;

   if (a == b) {
      console.log('Dieu klen dung!');
   } else {
      console.log('Dieu kien sai');
   }

   // Kiểu dữ liệu boolean
   
   var isSuccess = a > b;
   console.log(isSuccess);

   // Câu điều kiện if-Else:

   if (false) {
      console.log('Dieu klen dung!');
   } else {
      console.log('Dieu kien sai');
   }

   var test = 'Linh'
   test += ' Vuong'
   console.log(test)

var a = 1;
var b = -1;
var c = 0;
var d = 0;

var e = a <= b;
var f = c === d;
var g = a >= c;

console.log(e, f, g) // Output: ?
/*
   chú ý: 
   1. Bất kì giá trị nào trong js khi chuyển qua
   boolean mà có giá trị là true được gọi là Truthy
   2. Cách chuyển nhanh mọi kiểu dữ liệu khác sang bolean là dùng !!
      vd: console.log(!!1);
   3.  các giá trị khi chuyển qua boolean trả về false là: (Falsy)
      có 6 giá trị gọi là falsy là:
      0 ->> Một chuỗi chứa số 0
      false 
      ''/ "" ->> Chuỗi rỗng
      undefined, NaN, null

*/
// Toán tử logic
/**
 * 1. && - And: Một trong 2 vế sai là trả về false
 * 2. || - Or : Chỉ cần 1 vế đúng là trả về true
 * 3. !  - Not
 */



   
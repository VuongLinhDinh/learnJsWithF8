/**
  kiểu dữ liệu trong JS
  1. Dữ liệu nguyên thủy- primitive data
  - Number
  - String
  - Boolean
  - Undefined
  - Null
  - Symbol
    2. Kiểu dữ liệu phức tạp- complex data
    - Function
    - Object

 */
// Ví Dụ

    // Number type
    var a = 1;
    var b = 2;
    var c = 1.5;

    // String type
    var fullname = 'Son \'Dang'
    console.log(fullname)

    // Boolean type
    var isSuccess = true;

    // undefined type
    var age;

    // Null type
    var isNull = null;// Không có gì cả
    console.log(null)
    // Symbol
    var id = Symbol('Mô tả');// unique

    // 2. Kiểu dữ liệu phưcxs tạp
    
    // function
    var myFunction = function() {
        alert('Hi');
    }
    myFunction();

    // Object type
    
    var myObject = {
        name: 'Linh',
        age: 19,
        adress: 'Hà Nội'
    };
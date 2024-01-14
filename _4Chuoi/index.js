/**
 * CHUOI TRONG JS
 *
 * Tạo chuỗi
 *  - Các cách tạo chuỗi
 *  - Nên dùng cách nào? Lý do?
 *  - Kiểm tra datatype
 * Một số case sử dụngh backflash (\)
 * Xem độ dài chuỗi
 * Chú ý đọ dài khi viết code
 * Template string ES6
 */
let fulName = 'Dinh Linh " dep zai hihi \\ "';
let test = "day la cai test thu \v Day La text dong 2";
console.log(test);
console.log(fulName);
// xem do dai chuoi
console.log(fulName.length);
//Một dòng không để quá 80 kí tự

//Template string ES6
// la sử dụng dấu huyền để nối chuôi `${}`

// Làm việc với chuỗi

let myString = " Chào cậu, tớ tên Linh hân hạnh được làm quen! ";
let testString =
  "                                               *\n" +
  "                                              * *\n" +
  "                                             * * *\n" +
  "                                            * * * *\n" +
  "                                           * * * * *\n" +
  "                                          * * * * * *\n" +
  "                                         * * * * * * *\n" +
  "                                        * * * * * * * *\n" +
  "                                       * * * * * * * * *\n";
let testString01 =
  "                                      * * * * * * * * * *\n" +
  "                                     * * * * * * * * * * *\n" +
  "                                    * * * * * * * * * * * *\n" +
  "                                   * * * * * * * * * * * * *\n" +
  "                                  * * * * * * * * * * * * * *\n" +
  "                                 * * * * * * * * * * * * * * *\n" +
  "                                * * * * * * * * * * * * * * * *\n" +
  "                               * * * * * * * * * * * * * * * * *\n" +
  "                                       |              |            ";
console.log(testString + testString01);
// keyword: Javascript string method

// 1. Length -> đo độ dài một chuỗi
console.log("Độ dài chuỗi là: " + myString.length); // => đọ dài chuỗi
// 2. Find index
console.log("vị trí kí tự cần tìm: " + myString.indexOf("Linh")); // => Tìm vị trí index của kí tự
// 3. Cut string
// console.log(myString.slice(-3, -1));
// 4. Replace
/** 
console.log(myString.replace("Linh", "VanAnh")); // thay the mot tu
vD: muon thay the nhieu tu thi su dung bieu thuc chinh quy
console.log(myString.replace(/Linh/g, "VanAnh")); // thay the nhieu tu
 * 
*/
// 5. Convert to upper case
// 6. Convert to lower case
console.log(myString.toUpperCase()); // Chuyển sang chữ hoa
console.log(myString.toLowerCase()); // Chuyển sang chữ thuong
// 7. Trim => loai bo khoang trang o hai dau
console.log(myString.trim());
// 8. Split => cat mo chuoi thanh array nhung chuoi phai co mot diem chung nao do
let languages = "Js, PHP, Python";
console.log(languages.split(", ")); // => ơ đây là dau "," va " "
// vd khac: muon tach tung chu trong mot tu chi cần chuyển môt chuỗi rỗng

// 9. Get a character by index
console.log(myString.charAt(2)); // cach 1: tra ve chuoi rong neu index khong ton tai
console.log(myString[1]); // cach 2: tra ve undefined neu index khong ton tai

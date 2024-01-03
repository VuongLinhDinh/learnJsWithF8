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

let myString = "Chào cậu, tớ tên Linh hân hạnh được làm quen!";
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
console.log(myString.slice(-3, -1));
// 4. Replace
// 5. Convert to upper case
// 6. Convert to lower case
// 7. Trim
// 8. Split
// 9. Get a character by index

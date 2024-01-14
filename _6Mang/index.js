/**
 * Array:
 * 1. Cách tạo mảng
 *      - Cách tạo
 *      - Sử dụng cách nào. Tại sao??
 *      - Kiểm tra data type
 * 2. Truy xuất mảng
 *      - Độ dài mảng
 *      - Lấy phần tử theo index
 */

// phần 1:
// cách 1:
let languages = [
  "Javascript",
  "php",
  "c++",
  function () {},
  undefined,
  NaN,
  null,
  {},
  20,
];
console.log(languages);
// cách 2: trả về kiểu dữ iệu object
let arr = new Array(
  "Java",
  "Python",
  function () {},
  undefined,
  NaN,
  null,
  {},
  20
);
console.log(typeof arr);
// kiểm tra một biến có phải mảng hay không sử dụng isArray đúng thì sẽ trả về true
console.log(Array.isArray(languages));
// phần 2:
// độ dài mảng
console.log("độ dài của mảng languages là : ", languages.length);
// lấy phần tử theo index
console.log("Phần tử đầu tiên của mang la: " + languages[1]);
//------------------------------------------------------------------------------
/**
 * js array method
 * làm việc với mảng
 * 1. tostring
 * 2. join
 * 3. pop
 * 4. push
 * 5. shift
 * 6. unshift
 * 7. splicing
 * 8. concat
 * 9. slicing
 */
// 1.tostring(): ép kiểu mảng về chuỗi
console.log(languages.toString()); // [java, python, , , 20
// 2.join(): ép kiểu mảng về chuỗi nhưng có thể thêm tham số truyền vào
console.log(languages.join(", ")); // java,python,,20
// 3. pop(): xóa đi phần tử cuối mảng vè trả lại phần tử đã xóa
let lastLanguage = languages.pop();
// 4. push(): thêm 1 hoặc nhiều phần tử vào cuối mảng và trả về độ dài cuối cùng của mảng
console.log(
  " Độ dài mảng sau khi push là: " + languages.push("autoit", "java")
);
// 5.shift(): xóa một phần tử ở đầu mảng và trả về độ dài mảng mới
lastLanguage = languages.shift();
console.log("Mảng sau khi shift: " + languages);
// 6. unshift(): thêm một phần tử vào đầu mảng và trả về độ dài mảng mới
console.log(languages.unshift("C"));
// 7.splice(vị trí index, số phần tử cần xóa, 'phần tử thêm vào ngay trc vị trí index'): thay đổi giá trị của mảng
languages.splice(1, 0, "Ruby");
// 8. concat(): nối các phần tử vd nối hai mảng với nhau
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let resultArr = arr1.concat(arr2);
console.log("concat: " + resultArr);
// 8. slice(): cắt mảng
console.log(languages);
let mySlice = languages.slice(1, 3);
console.log(mySlice);

/**Array method
 * 1. forEach()
 * 2. every()
 * 3. some()
 * 4. find()
 * 5. filter()
 * 6. map()
 * 7. reduce()
 */
let courses = [
  { id: 1, name: "Javascript", coin: 250 },
  { id: 2, name: "Html caa", coin: 0 },
  { id: 3, name: "C++", coin: 0 },
  { id: 4, name: "PHP", coin: 300 },
  { id: 5, name: "ReacttJS", coin: 500 },
];
// hàm được truyền dới dạng tham số gọi là callback
//1. forEach():
courses.forEach((caurse, index) => {
  console.log(index, caurse);
});
//2. every(): kiểm tra tất cả các phần tử của mnagr phải thỏa mẫn một điều kiện gì đó
// hàm này trả về true/ false -> nếu chỉ một phần tử không thỏa mãn điều kiện --> false
let isFree = courses.every((caurse, index) => {
  return caurse.coin === 0;
});
console.log(isFree);
//3. some(): ngược lại với every()
// hàm này trả về true /false --> nếu có một phần tử thỏa mãn điều kiện
let hasCoin = courses.some((course) => course.coin > 0);
console.log(hasCoin);
//4. find(): hàm tìm kiếm
// let searchName = courses.find((course) => course.name === "C++");
// console.log(searchName);
//5. filter(): lọc ra các phần tử thỏa mãn điều kiện
// let isFilter = courses.filter((course, index) => {
//   course.coin === 0;
// });
// console.log(isFilter);
//6. map(): sử dụng để thay đổi các phần tử, trong phương thức map(mot ham)
// chú ý: hàm chuyền vào map() trả về gì thì hàm map() trả về giá trí đấy

// bài tập: sử thêm chữ khóa học vào trươc tên khóa học, thêm một thuộc tính coinText
function editItem(course) {
  return {
    id: course.id,
    name: `khoa hoc ${course.name}`,
    coin: course.coin,
    coinText: `Gia: ${course.coin}`,
  };
}
let newCourse = courses.map(editItem); // tra ve mang
console.log(newCourse);
// ngoai ra ham mà chuyen vào ham map() con tra vè gia tri index và originArr(arr luc dau)
//7. reduce(): sử dụng khi muốn nhận một giá trị duy nhất
/** hàm trả về 4 tham số:
 * cấu trúc: array.reduce(callback[, initialValue])
-- callback --
 * accumulator: là giá trị tích lũy(hoặc kết quả trước đó)
 * currentValue: Giá trị hiện tạo của phần tử mảng
 * currentIndex: chỉ số của phần tử hiện tại
 * array: mảng ban đầu
 * 
 -- initialValue --
 initialValue: giá trị khởi tạo ban đầu của --> không bắt buộc
 // lưu ý: nếu không có giá trị khởi tạo thì sẽ lấy phần tử đầu tiên làm giá trị khởi tạo
 */
function coinHandel(accumulator, currentValue) {
  return accumulator + currentValue.coin;
}
let totalCoin = courses.reduce(coinHandel, 0);
console.log(totalCoin);
/**
 * Tại SEA GAMES 31 vừa qua, đoàn thể thao Việt Nam đã đứng đầu bảng tổng sắp huy chương. Hãy tạo hàm getTotalGold có 1 tham số là mảng. Tính tổng số huy chương vàng mà đoàn thể thao Việt Nam đạt được trong kỳ SEA Game lần này.
 */
var sports = [
  {
    name: "Bơi lội",
    gold: 11,
  },
  {
    name: "Boxing",
    gold: 3,
  },
  {
    name: "Đạp xe",
    gold: 4,
  },
  {
    name: "Đấu kiếm",
    gold: 5,
  },
];
function getTotalGold(arr) {
  let totalGold = arr.reduce(function (accumulator, curentValue) {
    return accumulator + curentValue.gold;
  }, 0);
  return totalGold;
}
console.log(getTotalGold(sports));
// thực hành reduce()
// Flat-"làm phẳng" mảng từ Depth array - "mảng sâu"
let depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
let flatArray01 = [];
// cách 1: sử dụng vòng lặp
function flattenArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        flatArray01.push(arr[i][j]);
      }
    } else {
      flatArray01.push(arr[i]);
    }
  }
}
// flattenArray(depthArray);
// console.log(flatArray);
// Cách 2: Sử dụng hàm reduce()
let flatArray = depthArray.reduce(function (outputArr, item) {
  return outputArr.concat(item);
}, []);
console.log(flatArray);
// Lấy ra các khóa học đưa vào 1 mảng mới
let topics = [
  {
    topic: "front-end",
    courses: [
      {
        id: 1,
        title: "html-css",
      },
      {
        id: 2,
        title: "javascript",
      },
    ],
  },
  {
    topic: "back-end",
    courses: [
      {
        id: 1,
        title: "PHP",
      },
      {
        id: 2,
        title: "Java",
      },
    ],
  },
];
let newCourses = topics.reduce(function (course, topic) {
  return course.concat(topic.courses);
}, []);
console.log(newCourses);
var watchList = [
  {
    Title: "Inception",
    Year: "2010",
    Rated: "PG-13",
    Released: "16 Jul 2010",
    Runtime: "148 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer: "Christopher Nolan",
    Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    Language: "English, Japanese, French",
    Country: "USA, UK",
    imdbRating: "8.8",
    imdbVotes: "1,446,708",
    imdbID: "tt1375666",
    Type: "movie",
  },
  {
    Title: "Interstellar",
    Year: "2014",
    Rated: "PG-13",
    Released: "07 Nov 2014",
    Runtime: "169 min",
    Genre: "Adventure, Drama, Sci-Fi",
    Director: "Christopher Nolan",
    Writer: "Jonathan Nolan, Christopher Nolan",
    Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: "English",
    Country: "USA, UK",
    imdbRating: "8.6",
    imdbVotes: "910,366",
    imdbID: "tt0816692",
    Type: "movie",
  },
  {
    Title: "The Dark Knight",
    Year: "2008",
    Rated: "PG-13",
    Released: "18 Jul 2008",
    Runtime: "152 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer:
      "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    Language: "English, Mandarin",
    Country: "USA, UK",
    imdbRating: "9.0",
    imdbVotes: "1,652,832",
    imdbID: "tt0468569",
    Type: "movie",
  },
  {
    Title: "Batman Begins",
    Year: "2005",
    Rated: "PG-13",
    Released: "15 Jun 2005",
    Runtime: "140 min",
    Genre: "Action, Adventure",
    Director: "Christopher Nolan",
    Writer:
      "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    Language: "English, Urdu, Mandarin",
    Country: "USA, UK",
    imdbRating: "8.3",
    imdbVotes: "972,584",
    imdbID: "tt0372784",
    Type: "movie",
  },
  {
    Title: "Avatar",
    Year: "2009",
    Rated: "PG-13",
    Released: "18 Dec 2009",
    Runtime: "162 min",
    Genre: "Action, Adventure, Fantasy",
    Director: "James Cameron",
    Writer: "James Cameron",
    Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    Language: "English, Spanish",
    Country: "USA, UK",
    imdbRating: "7.9",
    imdbVotes: "876,575",
    imdbID: "tt0499549",
    Type: "movie",
  },
];
function calculateRating(arr) {
  if (Array.isArray(arr)) {
    var director = arr.filter(function (dir) {
      return dir.Director === "Christopher Nolan";
    });
    var totalIMDB = director.reduce(function (imdbRating, items) {
      return imdbRating + parseFloat(items.imdbRating);
    }, 0);
    let averageIMDB = Number(totalIMDB / director.length);
    return averageIMDB;
  } else {
    console.log("Nhập cái mảng hẳn hoi tử tế vào!");
  }
}
// Expected results
console.log(calculateRating(watchList)); // Output: 8.675

// logic của phương thức reduce
const numbers = [1, 2, 3, 4, 5];
Array.prototype.newreduce = function (callback, result) {
  let i = 0;
  if (arguments.length < 2) {
    i = 1;
    result = this[0];
  }
  for (; i < this.length; i++) {
    result = callback(result, this[i], i, this);
  }
  return result;
};

const result = numbers.newreduce((total, number) => {
  return total + number;
});
console.log(result);
// includes trong js: là một phương thức được sử dụng trong hàm với chuỗi đẻ kiểm tra một giá trị nào đó co nằm tong hàm hoặc chuỗi hay không
// include với string
let mystring = "Chào mừng bạn đên với tôi";
console.log(mystring.includes("mừng", 1));
// includes vói mảng:
const myArr = ["linh", "thinh", "hong"];
console.log(myArr.includes("linh", 1));

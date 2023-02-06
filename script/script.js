// for (i = 0; i < 10; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }
// 피보나치 수열 : 1 1 2 3 5 8 13 21 34 55

// var a = 1;
// var b = 1;
// console.log(a);
// console.log(b);

// let result = 2;
// console.log(result);
// for (i = 0; i >= 0; i++) {
//   a = b;
//   b = result;
//   result = a + b;
//   console.log(result);
//   if (result >= 55) {
//     break;
//   }
// }
// let now = new Date();
// let year = now.getFullYear();

// for (i = year; i >= year - 100; i--) {
//   $("#birthYear").append("<option value='" + i + "'>" + i + "</option>");
// }

// // 데이터의 개수에 따라 반복
// //  #score라는 것 안쪽에 새로운 행을 만들고
// //  그 행에 데이터 내용을 기입하고
// //  평균 점수를 따져서 60점 이상이면 PASS
// //  그렇지 않으면 Fail 이라고 한다.
// var jumsu = [
//   { name: "김태희", math: 65, sci: 85 },
//   { name: "차인표", math: 84, sci: 15 },
//   { name: "송혜교", math: 97, sci: 95 },
//   { name: "송중기", math: 93, sci: 95 },
// ];
// let len = jumsu.length;

// for (i = 0; i < len; i++) {
//   var avg = (jumsu[i].math + jumsu[i].sci) / 2;
//   var passfall;
//   if (avg >= 60) {
//     avg = "PASS";
//   } else {
//     avg = "fail";
//   }
//   $("#score").append(

//   );
// }

var apart = [
  ["영희", "짱구", "1", "2", "3", "4", "5", "6"],
  ["7", "8", "9", "10", "11"],
  ["14", "1223", "철수", "13", "12"],
  ["612332", "23123", "213", "3213", "213"],
  ["5123", "김영재", "똥개"],
  ["512323", "김영32", "똥2"],
];

// 수색 계획

// 5층 건물 각 층을 훑는다
// 각층 수색 계획
// 해당층 모든 세대를 차례대로 흝는다.

var floor = apart.length;
var wanted = window.prompt("찾을사람의 이름을 입력하세요");
for (i = 0; i < 5; i++) {
  var home = floor[i];
  for (j = 0; j < home; j++) {
    if (apart[i][j] == "wanted") {
      var cheong = i + 1;
      cheong = cheong.toString();
      var ho = j + 1;
      if (ho < 10) {
        ho = "0" + ho;
      }
      var address = cheong + ho;
      alert(wanted + "은(는) " + address + "호에서 발견되었습니다.");
      
    }
  }
}

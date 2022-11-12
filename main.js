// BÀI TẬP 1
function ex1() {
  var sum = 0;
  var i = 1;
  while (sum < 10000) {
    i++;
    sum += i;
  }
  document.getElementById("result1").innerHTML =
    "Số nguyên dương nhỏ nhất là: " + i;
}
// BÀI TẬP 2
function ex2() {
  var x = document.getElementById("x").value * 1;
  var n = document.getElementById("n").value * 1;
  var sum = 0;
  var number;
  var i = 1;
  while (i <= n) {
    number = Math.pow(x, i);
    sum += number;
    i++;
  }
  document.getElementById("result2").innerHTML = sum;
}
// BÀI TẬP 3
function ex3() {
  var y = document.getElementById("y").value * 1;
  var sum = 1;
  var number;
  for (var i = 1; i <= y; i++) {
    sum *= i;
  }

  document.getElementById("result3").innerHTML = sum;
}
// BÀI TẬP 4
function ex4() {
  var red = document.getElementById("red").value;
  var blue = document.getElementById("blue").value;
  var n = 10;
  var tong;
  var i = 1;
  for (i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      tong = blue+ red
    }
    tong++;
  }
}
// BÀI TẬP 5
function ex5() {
  var z = document.getElementById("z").value * 1;
  var squareRoot = Math.sqrt(z);
  var count = 0;
  var result = "";
    var number = 1;
    for (var i = 2; i <= squareRoot; i++) {
      if (z % i == 0) {
        number = 0;
        break;
      }
    }
  document.getElementById("result5").innerHTML = result;
}

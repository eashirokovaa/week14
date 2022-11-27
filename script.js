function select(sender) {
  sender.classList.add("selected");
}

function getName() {
  let userNameInput = document.getElementById("username").value;
  document.getElementById("nameplate").value = "Привет, " + userNameInput + "!";
}

class Calculation {
  static calcSum(a, b) {
    let sum = a + b;
    document.getElementById("result").value = sum;
  }
  static calcSubtract(a, b) {
    let sum = a - b;
    document.getElementById("result").value = sum;
  }
  static calcMult(a, b) {
    let sum = a * b;
    document.getElementById("result").value = sum;
  }
  static calcDiv(a, b) {
    let sum = a / b;
    b == "0"
      ? alert(`На ноль делить нельзя!!!`)
      : (document.getElementById("result").value = sum);
  }
}
let digit1 = document.getElementById("digit1");
let digit2 = document.getElementById("digit2");
document.getElementById("sum").onclick = function () {
  Calculation.calcSum(Number(digit1.value), Number(digit2.value));
};
document.getElementById("subtract").onclick = function () {
  Calculation.calcSubtract(Number(digit1.value), Number(digit2.value));
};
document.getElementById("mult").onclick = function () {
  Calculation.calcMult(Number(digit1.value), Number(digit2.value));
};
document.getElementById("div").onclick = function () {
  Calculation.calcDiv(Number(digit1.value), Number(digit2.value));
};

function forwardImg() {
  let changedImg = document.getElementById("catImage");
  if (
    changedImg.src == "https://razdeti.ru/images/photos/medium/article4912.jpg"
  ) {
    changedImg.src = "https://alegri.ru/images/photos/medium/article3386.jpg";
  } else if (
    changedImg.src == "https://alegri.ru/images/photos/medium/article3386.jpg"
  ) {
    changedImg.src = "https://stihi.ru/pics/2016/04/14/4315.jpg";
  } else {
    changedImg.src = "https://razdeti.ru/images/photos/medium/article4912.jpg";
  }
}
function backwardImg() {
  let changedImg = document.getElementById("catImage");
  if (
    changedImg.src == "https://razdeti.ru/images/photos/medium/article4912.jpg"
  ) {
    changedImg.src = "https://stihi.ru/pics/2016/04/14/4315.jpg";
  } else if (changedImg.src == "https://stihi.ru/pics/2016/04/14/4315.jpg") {
    changedImg.src = "https://alegri.ru/images/photos/medium/article3386.jpg";
  } else {
    changedImg.src = "https://razdeti.ru/images/photos/medium/article4912.jpg";
  }
}

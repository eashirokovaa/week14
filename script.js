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
  static calcSubtract(a,b) {
    let sum = a - b;
    document.getElementById("result").value = sum;
  }
  static calcMult(a,b) {
    let sum = a * b;
    document.getElementById("result").value = sum;
  }
  static calcDiv(a,b) {
    let sum = a / b;
    b == "0"
      ? alert(`На ноль делить нельзя!!!`)
      : (document.getElementById("result").value = sum);
  }
}
document.getElementById("sum").onclick = function () {
  let a = Number(document.getElementById("digit1").value);
  let b = Number(document.getElementById("digit2").value);
  Calculation.calcSum(a, b);
};
document.getElementById("subtract").onclick = function () {
  let a = Number(document.getElementById("digit1").value);
  let b = Number(document.getElementById("digit2").value);
  Calculation.calcSubtract(a, b);
};
document.getElementById("mult").onclick = function () {
  let a = Number(document.getElementById("digit1").value);
  let b = Number(document.getElementById("digit2").value);
  Calculation.calcMult(a, b);
};
document.getElementById("div").onclick = function () {
  let a = Number(document.getElementById("digit1").value);
  let b = Number(document.getElementById("digit2").value);
  Calculation.calcDiv(a, b);
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

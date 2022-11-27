function select(sender) {
  sender.classList.add("selected");
}

function getName() {
  let userNameInput = document.getElementById("username").value;
  document.getElementById("nameplate").value = "Привет, " + userNameInput + "!";
}

class Calculation {
  static calcSum(a, b) {
    return a + b;
  }
  static calcSubtract(a, b) {
    return a - b;
  }
  static calcMult(a, b) {
    return a * b;
  }
  static calcDiv(a, b) {
    return a / b;
  }
}
let digit1 = document.getElementById("digit1");
let digit2 = document.getElementById("digit2");
document.getElementById("sum").onclick = function () {
  const result = Calculation.calcSum(
    Number(digit1.value),
    Number(digit2.value)
  );
  document.getElementById("result").value = result;
};
document.getElementById("subtract").onclick = function () {
  const result = Calculation.calcSubtract(
    Number(digit1.value),
    Number(digit2.value)
  );
  document.getElementById("result").value = result;
};
document.getElementById("mult").onclick = function () {
  const result = Calculation.calcMult(
    Number(digit1.value),
    Number(digit2.value)
  );
  document.getElementById("result").value = result;
};
document.getElementById("div").onclick = function () {
  const result = Calculation.calcDiv(
    Number(digit1.value),
    Number(digit2.value)
  );
  Number(digit2.value) == "0"
    ? alert(`На ноль делить нельзя!!!`)
    : (document.getElementById("result").value = result);
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

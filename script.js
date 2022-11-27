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
function calcResult(operation) {
  const a = Number(document.getElementById("digit1").value);
  const b = Number(document.getElementById("digit2").value);
  let result = null;
  switch (operation) {
    case "plus":
      result = Calculation.calcSum(a, b);
      break;
    case "minus":
      result = Calculation.calcSubtract(a, b);
      break;
    case "mult":
      result = Calculation.calcMult(a, b);
      break;
    case "div":
      b == "0" ? alert("на ноль делить нельзя!") : result = Calculation.calcDiv(a, b);
      break;
  }
  document.getElementById("result").value = result
}
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

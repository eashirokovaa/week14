function select(sender) {
  sender.classList.add("selected");
}

function getName() {
  let userNameInput = document.getElementById("username").value;
  document.getElementById("nameplate").value = "Привет, " + userNameInput + '!';
}
function calcSum() {
  let digit1 = Number(document.getElementById("digit1").value);
  let digit2 = Number(document.getElementById("digit2").value);
  sum = digit1 + digit2;
  document.getElementById("result").value = sum;
}
function calcSubtract() {
  let digit3 = Number(document.getElementById("digit3").value);
  let digit4 = Number(document.getElementById("digit4").value);
  sum1 = digit3 - digit4;
  document.getElementById("result1").value = sum1;
}
function calcMult() {
  let digit5 = Number(document.getElementById("digit5").value);
  let digit6 = Number(document.getElementById("digit6").value);
  sum2 = digit5 * digit6;
  document.getElementById("result2").value = sum2;
}
function calcDiv() {
  let digit7 = Number(document.getElementById("digit7").value);
  let digit8 = Number(document.getElementById("digit8").value);
  sum3 = digit7 / digit8;
  document.getElementById("result3").value = sum3;
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

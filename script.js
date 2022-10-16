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
  let digit1 = Number(document.getElementById("digit1").value);
  let digit2 = Number(document.getElementById("digit2").value);
  sum = digit1 - digit2;
  document.getElementById("result").value = sum;
}
function calcMult() {
  let digit1 = Number(document.getElementById("digit1").value);
  let digit2 = Number(document.getElementById("digit2").value);
  sum = digit1 * digit2;
  document.getElementById("result").value = sum;
}
function calcDiv() {
  let digit1 = Number(document.getElementById("digit1").value);
  let digit2 = Number(document.getElementById("digit2").value);
  sum = digit1 / digit2;
  document.getElementById("result").value = sum;
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

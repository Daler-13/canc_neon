let ekran = document.querySelector(".ekran");
ekran.value = 0;
function min() {
  ekran.value = Number(ekran.value) - 1;
}
function max() {
  ekran.value = Number(ekran.value) + 1;
}
function zero() {
  ekran.value = "0";
}
function dark() {
  document.getElementById("www").style.background = "rgba(0,0,0,.9)";
  document.getElementById("color").style.color = "white";
}
function white() {
  document.getElementById("www").style.background = "white";
  document.getElementById("www").style.border = "1px solid black";
  document.getElementById("www").style.background = "transparent";
}
function color() {
  document.getElementById("color").style.color = "red";
}

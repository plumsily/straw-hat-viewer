document.getElementById("luffy").onclick = luffy;
document.getElementById("zoro").onclick = zoro;
document.getElementById("nami").onclick = nami;
document.getElementById("sanji").onclick = sanji;
document.getElementById("usopp").onclick = usopp;
document.getElementById("chopper").onclick = chopper;
document.getElementById("brook").onclick = brook;
document.getElementById("franky").onclick = franky;
document.getElementById("robin").onclick = robin;
document.getElementById("jinbe").onclick = jinbe;

function luffy() {
  document.querySelector("#profile-name").innerHTML = "Monkey D. Luffy";
  document.querySelector("#profile-bounty").innerHTML = "Bounty: 3,000,000,000";
  document.getElementById("profile-image").src = "img/luffy-gif-10.gif";
}
function zoro() {
  document.querySelector("#profile-name").innerHTML = "Roronoa Zoro";
  document.querySelector("#profile-bounty").innerHTML = "Bounty: 1,111,000,000";
  document.getElementById("profile-image").src = "img/zoro.gif";
}
function nami() {
  document.querySelector("#profile-name").innerHTML = "Nami";
  document.querySelector("#profile-bounty").innerHTML = "Bounty: 366,000,000";
  document.getElementById("profile-image").src = "img/nami.gif";
}
function sanji() {
  document.querySelector("#profile-name").innerHTML = "Sanji";
  document.querySelector("#profile-bounty").innerHTML = "Bounty: 1,032,000,000";
  document.getElementById("profile-image").src = "img/sanji.gif";
}
function usopp() {
  document.querySelector("#profile-name").innerHTML = "Usopp";
  document.querySelector("#profile-bounty").innerHTML = "Bounty: 500,000,000";
  document.getElementById("profile-image").src = "img/usopp.gif";
}
function chopper() {
  document.querySelector("#profile-name").innerHTML = "Tony Tony Chopper";
  document.querySelector("#profile-bounty").innerHTML = "Bounty: 1,000";
  document.getElementById("profile-image").src = "img/chopper.gif";
}
function brook() {
  document.querySelector("#profile-name").innerHTML = "Brook";
  document.querySelector("#profile-bounty").innerHTML = "Bounty: 383,000,000";
  document.getElementById("profile-image").src = "img/brook.gif";
}
function franky() {
  document.querySelector("#profile-name").innerHTML = "Franky";
  document.querySelector("#profile-bounty").innerHTML = "Bounty: 394,000,000";
  document.getElementById("profile-image").src = "img/franky.gif";
}
function robin() {
  document.querySelector("#profile-name").innerHTML = "Nico Robin";
  document.querySelector("#profile-bounty").innerHTML = "Bounty: 930,000,000";
  document.getElementById("profile-image").src = "img/robin.gif";
}
function jinbe() {
  document.querySelector("#profile-name").innerHTML = "Jinbe";
  document.querySelector("#profile-bounty").innerHTML = "Bounty: 1,100,000,000";
  document.getElementById("profile-image").src = "img/jinbe.gif";
}

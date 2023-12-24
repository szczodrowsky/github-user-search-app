///switch section///
const switchElement = document.getElementById("switch");
const heading = document.getElementById("heading");
const tittle = document.getElementById("tittle");
const mainIcon = document.getElementById("day-night");
const myBody = document.getElementById("myBody");
const searcherDiv = document.getElementById("icon-seracher-button");
const seracher = document.getElementById("searchForUser");
const card = document.getElementById("card");
const userName = document.getElementById("user-name");
const shortName = document.getElementById("short-name");
const whenJoined = document.getElementById("when-joined");
const describe = document.getElementById("describe");
const reposFF = document.getElementById("repos-folows-following");
const valueName = document.querySelectorAll(".name");
const valueValue = document.querySelectorAll(".number");
const iconsName = document.querySelectorAll(".name-icon");
const paths = document.querySelectorAll("path");
let isLight = true;

switchElement.addEventListener("click", () => {
  ///set DarkMode/////
  if (isLight) {
    switchElement.textContent = "LIGHT";
    myBody.style.background = "rgb(20, 29, 47)";
    switchElement.style.color = "hsla(0, 0%, 100%, 1)";
    tittle.style.color = "hsla(0, 0%, 100%, 1)";
    mainIcon.src = "./assets/icon-sun.svg";
    searcherDiv.style.background = "rgb(30, 42, 71)";
    seracher.style.background = "rgb(30, 42, 71)";
    seracher.style.color = "hsla(0, 0%, 100%, 1)";
    card.style.background = "rgb(30, 42, 71)";
    userName.style.color = "rgb(255, 255, 255)";
    whenJoined.style.color = "rgb(255, 255, 255)";
    describe.style.color = "rgb(255, 255, 255)"; ///jak cos FFF
    reposFF.style.background = "rgb(20, 29, 47)";
    valueName.forEach((e) => {
      e.style.color = "rgb(255, 255, 255)";
    });
    valueValue.forEach((e) => {
      e.style.color = "rgb(255, 255, 255)";
    });
    iconsName.forEach((e) => {
      e.style.color = "rgb(255, 255, 255)";
    });
    paths.forEach((e) => {
      e.style.fill = "rgb(255, 255, 255)";
    });
    isLight = false;
  } //// set LightMode////
  else if (!isLight) {
    switchElement.textContent = "DARK";
    myBody.style.background = "rgb(246, 248, 255)";
    switchElement.style.color = "hsla(217, 35%, 45%, 1)";
    tittle.style.color = "hsla(220, 18%, 16%, 1)";
    mainIcon.src = "./assets/icon-moon.svg";
    searcherDiv.style.background = "rgb(254, 254, 254)";
    seracher.style.background = "rgb(254, 254, 254)";
    seracher.style.color = "rgb(30, 42, 71)";
    card.style.background = "rgb(254, 254, 254)";
    userName.style.color = "rgb(43, 52, 66)";
    whenJoined.style.color = "rgb(105, 124, 154)";
    describe.style.color = "rgb(75, 106, 155)"; ///ten kolor tez do ikonek idzie 4B6A9B
    reposFF.style.background = "rgb(246, 248, 255)";
    valueName.forEach((e) => {
      e.style.color = "rgb(75, 106, 155)";
    });
    valueValue.forEach((e) => {
      e.style.color = "rgb(43, 52, 66)";
    });
    iconsName.forEach((e) => {
      e.style.color = "rgb(75, 106, 155)";
    });
    paths.forEach((e) => {
      e.style.fill = "rgb(75, 106, 155)";
    });
    isLight = true;
  }
});

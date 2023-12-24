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
///API section ///
function convertDate(created_at) {
  const dateObject = new Date(created_at);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = dateObject.getUTCDate();
  const monthIndex = dateObject.getUTCMonth();
  const year = dateObject.getUTCFullYear();
  const formattedDate = `${day} ${monthNames[monthIndex]} ${year}`;

  return formattedDate;
}
const searchBtn = document.getElementById("searchBtn");
const repoNumber = document.getElementById("repoNumber");
const folowersNumber = document.getElementById("folowersNumber");
const followsNumber = document.getElementById("followsNumber");
const locationName = document.getElementById("locationName");
const websiteName = document.getElementById("websiteName");
const twitterName = document.getElementById("twitterLink");
const companyName = document.getElementById("companyName");
const avatar = document.getElementById("avatar");

function setDocument(data) {
  function setTextContent(element, text) {
    if (text) {
      element.textContent = text;
    } else {
      element.textContent = "Not Available";
      element.style.color = "hsla(217, 35%, 45%, 1)";
    }
  }

  setTextContent(userName, data.name);
  setTextContent(shortName, data.login);
  setTextContent(describe, data.bio);
  setTextContent(repoNumber, data.public_repos);
  setTextContent(folowersNumber, data.followers);
  setTextContent(followsNumber, data.following);
  setTextContent(locationName, data.location);
  setTextContent(websiteName, data.blog);
  setTextContent(twitterName, data.twitter_username);
  setTextContent(companyName, data.company);
  const createdDate = convertDate(data.created_at);
  setTextContent(whenJoined, createdDate);
  avatar.src = data.avatar_url || "./assets/Oval.svg";
}

function getUserData() {
  const search = document.getElementById("searchForUser").value;
  const orginalName = search.split(" ").join("");
  const APIurl = "https://api.github.com/users/" + orginalName;

  fetch(APIurl)
    .then((response) => response.json())
    .then((data) => setDocument(data));
}

searchBtn.addEventListener("click", getUserData);

const header = document.querySelector("header");

const headerContainer = document.createElement("div");
headerContainer.classList.add("header-container");

const headerLeft = document.createElement("div");
headerLeft.classList.add("header-left");

const logo = document.createElement("img");
logo.src = "/logo.png";

const title = document.createElement("h1");
title.textContent = "UnEarthed";

headerLeft.append(logo);
headerLeft.append(title);

const headerRight = document.createElement("div");
headerRight.classList.add("header-right");

const homeButton = document.createElement("button");
homeButton.textContent = "Home";
const handleClick = () => {
  window.location.assign("/");
};
homeButton.addEventListener("click", handleClick);

headerRight.append(homeButton);

headerContainer.append(headerLeft);
headerContainer.append(headerRight);

header.append(headerContainer);

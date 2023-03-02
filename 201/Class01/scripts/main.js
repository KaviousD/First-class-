const myImage = document.querySelector("img");

myImage.onclick = () => {
  const myScr = myImage.getAttribute("src");
  if (myScr === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};


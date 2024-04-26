let shareBtn = document.querySelector(".article__share-btn");

let shareModal = document.querySelector(".share-modal");
let authorInfo = document.querySelector(".content__author");

function getScreenType() {
  let screenWidth = screen.width;

  if (screenWidth >= 950) {
    return "desktop"
  } else {
    return "mobile"
  }
}

shareBtn.addEventListener("click", e => {
  if (shareBtn.getAttribute("aria-expanded") === "false") {
    // Displays share menu
    shareBtn.setAttribute("aria-expanded", "true");

    if (getScreenType() === "mobile") {
      shareModal.classList.toggle("hidden");
      authorInfo.classList.toggle("hidden");  
    } else if (getScreenType() === "desktop") {
      shareModal.classList.toggle("hidden");
    }
  } else {
    // Hides share menu
    shareBtn.setAttribute("aria-expanded", "true");

    if (getScreenType() === "mobile") {
      shareModal.classList.toggle("hidden");
      authorInfo.classList.toggle("hidden");  
    } else if (getScreenType() === "desktop") {
      shareModal.classList.toggle("hidden");
    }
  }
})
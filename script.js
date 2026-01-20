const shareButton = document.querySelector(".share-button");
const shareWrapper = document.querySelector(".share-wrapper");
const authorContainer = document.querySelector(".author-container");

shareButton.addEventListener("click", function () {
  shareWrapper.classList.toggle("active");
  authorContainer.classList.toggle("active");
});
